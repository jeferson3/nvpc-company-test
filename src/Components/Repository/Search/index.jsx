import { useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import { getRepositories, updateRepositories } from "../../../Context/RepositoryContext/actions";
import { useRepositoryContext } from "../../../Context/RepositoryContext/context";
import RepositorySearchBuilder from "../../../Services/RepositorySearchBuilder";

export const Search = function ({ setShow, setOrderDate, setOrderName }) {

  const [search, setSearch] = useState('');
  const [disabled, setDisabled] = useState('Todos');
  const [arquived, setArquived] = useState('Todos');

  const builder = RepositorySearchBuilder;
  const { dispatch, state: {repositories} } = useRepositoryContext();

  const handleSubmitForm = function (Event) {
    Event.preventDefault();
    // getRepositories(1, dispatch);
    updateRepositories(dispatch, repositories, builder)
  };

  const clearForm = function (Event) {
    Event.preventDefault();
    setSearch('');
    setArquived('Todos');
    setDisabled('Todos');
    builder.setSearch('');
    builder.setArquived('Todos');
    builder.setDisabled('Todos');
    setOrderDate(false);
    setOrderName(false);
    getRepositories(1, dispatch);
  };

  const handleDisabled = function(e) {
    builder.setDisabled(e.target.value);
    setDisabled(e.target.value)
  }

  const handleArquived = function(e) {
    builder.setArquived(e.target.value);
    setArquived(e.target.value)
  }

  const handleSearch = function(e) {
    builder.setSearch(e.target.value);
    setSearch(e.target.value)
  }
  
  return (
    <Accordion activeKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filtros</Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={handleSubmitForm}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Disabilitado:</Form.Label>
                  <Form.Select onChange={handleDisabled} value={disabled}>
                    <option value={'Todos'}>-- selecione --</option>
                    <option value={'sim'}>Sim</option>
                    <option value={'nao'}>Não</option>
                  </Form.Select>
                </Form.Group>  
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Arquivado:</Form.Label>
                  <Form.Select onChange={handleArquived} value={arquived}>
                    <option value={'Todos'}>-- selecione --</option>
                    <option value={'sim'}>Sim</option>
                    <option value={'nao'}>Não</option>
                  </Form.Select>
                </Form.Group>  
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="search"
                    placeholder="Pesquisar"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                    value={search}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="text-end">
                <Button variant="primary" type="submit">
                  Pesquisar
                </Button>
                <Button className="ms-2" variant="secondary" type="button" onClick={clearForm}>
                  Limpar
                </Button>
              </Col>
            </Row>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
