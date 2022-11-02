import React, { useState, useEffect, useRef } from "react";
import { getRepositories, orderRepositories } from "../../Context/RepositoryContext/actions";
import { useRepositoryContext } from "../../Context/RepositoryContext/context";
import { LoadMore } from "../../Components/Repository/LoadMore";
import { Search } from "../../Components/Repository/Search";
import { Alert } from "react-bootstrap";
import { IRepository, OrderType } from "../../@types/context_repository.d";
import { RepositoryCard } from "../../Components/Repository/index";

export const Repositories: React.FC = function() {

  const { state: { repositories }, dispatch } = useRepositoryContext();

  const isMounted = useRef(true);

  const [page, setPage] = useState(repositories.page);
  const [, setShow] = useState(false);
  const [orderName, setOrderName] = useState(false);
  const [orderDate, setOrderDate] = useState(false);

  useEffect(() => {
    if (isMounted.current) {
      getRepositories(page, dispatch);
    }
    return () => {
      isMounted.current = false;
    }
  }, [page, dispatch]);


  const handleOrderName = function() {
    setOrderName(!orderName);
    orderRepositories({type: OrderType.STRING, field: (orderName ? 'name' : '-name')}, repositories);  
  }

  const handleOrderDate = function() {
    setOrderDate(!orderDate);
    orderRepositories({type: OrderType.DATE, field: (orderDate ? 'created_at' : '-created_at')}, repositories); 
  }

  return (
    <div style={{ padding: "10px 50px" }}>
      <h1 className="text-uppercase text-center mt-3">Repositórios <a href="https://github.com/jeferson3" target={"_blank"} rel="noreferrer" className="text-danger">Jeferson</a></h1>
      
      <Search setShow={setShow} setOrderDate={setOrderDate} setOrderName={setOrderName} />
      {!!repositories.data && repositories.data.length > 0 && (
        <>
          <table className="table table-stripped table-dark">
            <thead>
              <tr>
                <th>Id</th>
                { !!orderName && 
                  <th className="d-flex" onClick={handleOrderName}>
                    <i className="fas fa-sort-up me-1"></i>
                    <span>Nome</span>
                  </th>
                }
                { !orderName && 
                  <th className="d-flex" onClick={handleOrderName}>
                    <i className="fas fa-sort-down me-1"></i>
                    <span>Nome</span>
                  </th>
                }
                <th>Descrição</th>
                <th>Arquivado</th>
                <th>Desabilitado</th>
                { !!orderDate && 
                  <th className="d-flex" onClick={handleOrderDate}>
                    <i className="fas fa-sort-up me-1"></i>
                    <span>Data Criação</span>
                  </th>
                }
                { !orderDate && 
                  <th className="d-flex" onClick={handleOrderDate}>
                    <i className="fas fa-sort-down me-1"></i>
                    <span>Data Criação</span>
                  </th>
                }
              </tr>
            </thead>
            <tbody>
              {repositories.data.map((r: IRepository, i: number) => {
                  return <RepositoryCard key={i} repository={r} />;
                })}
            </tbody>
          </table>

          <LoadMore page={page} setPage={setPage} />
        </>
      )}
      {(!repositories.data || repositories.data.length === 0) && (
        <Alert variant="danger">
          Nenhum registro encontrado!
        </Alert>
      )}
      
    </div>
  );
}
