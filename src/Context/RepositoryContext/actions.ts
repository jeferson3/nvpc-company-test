import { IRepositoryPagination, Order, OrderType } from './../../@types/context_repository.d';
import { Types, IRepository, RepositorySearchBuilderI } from '../../@types/context_repository.d';
import { ActionRepository } from "../../@types/context_repository.d";
import { Api } from "../../Services/Api";
import { AxiosResponse } from 'axios';

export const setLoading = (dispatch: React.Dispatch<ActionRepository>) => {
  dispatch({ type: Types.SET_LOADING });
};

export const setMoreData = (dispatch: React.Dispatch<ActionRepository>) => {
  dispatch({ type: Types.SET_HAS_MORE_DATA });
};

export const setNoMoreData = (dispatch: React.Dispatch<ActionRepository>) => {
  dispatch({ type: Types.SET_NO_MORE_DATA });
};

export const getRepositories = (page: number = 0, dispatch: React.Dispatch<ActionRepository>) => {
  setLoading(dispatch);

  Api({
    url: "/repos",
    method: "GET",
    params: {
      page,
      per_page: 5
    }
  })
   .then((res: AxiosResponse<Array<IRepository>>) => {   
      if (res.data.length === 0) {
        dispatch({ type: Types.SET_NO_MORE_DATA });
      }
      else {
        dispatch({ type: Types.SET_HAS_MORE_DATA });
      }
      if (res.status === 200) {
        dispatch({ type: Types.SET_REPOSITORIES, payload: {
          data: res.data,
          page
        } });
      }
      
    })
    .finally(() => {
      setLoading(dispatch);
    });
};

export const getMoreRepositories = (page: number = 0, dispatch: React.Dispatch<ActionRepository>) => {
  setLoading(dispatch);

  Api({
    url: "/repos",
    method: "GET",
    params: {
      page,
      per_page: 5
    }
  })
   .then((res: AxiosResponse<Array<IRepository>>) => {   
      if (res.data.length === 0) {
        dispatch({ type: Types.SET_NO_MORE_DATA });
      }
      else {
        dispatch({ type: Types.SET_HAS_MORE_DATA });
      }
      if (res.status === 200) {
        dispatch({ type: Types.MORE_REPOSITORIES, payload: {
          data: res.data,
          page
        } });
      }
      
    })
    .finally(() => {
      setLoading(dispatch);
    });
};

export const updateRepositories = (dispatch: React.Dispatch<ActionRepository>, repositories: IRepositoryPagination, builder: RepositorySearchBuilderI) => {
  let res = repositories;
  if (builder.isArchived() === true) {
    res.data = res.data.filter(r => !!r.archived)
  }
  else if (builder.isArchived() === false) {
    res.data = res.data.filter(r => !r.archived)
  }
  if (builder.isDisabled() === true) {
    res.data = res.data.filter(r => !!r.disabled)
  }
  else if (builder.isDisabled() === false) {
    res.data = res.data.filter(r => !r.disabled)
  }
  if (builder.hasSearch()) {
    res.data = res.data.filter(r => r.name.toLocaleLowerCase().includes(builder.getSearch().toLocaleLowerCase()))
  }
  if (builder.isArchived() === 'Todos' && builder.isDisabled() === 'Todos' && !builder.hasSearch()) {
    getRepositories(1, dispatch);
  }
  else {
    dispatch({ type: Types.UPDATE_REPOSITORIES, payload: res });
  }
};

export const orderRepositories = (order: Order, repositories: IRepositoryPagination) => {
  let res = repositories.data;

  if (order.type === OrderType.STRING) {
    res.sort(dynamicSort(order.field));
  }
  else if (order.type === OrderType.DATE) {
    res.sort(dynamicSort(order.field));
  }
};

export const paginationSetPage = (dispatch: React.Dispatch<ActionRepository>, page: Number) => {
  dispatch({ type: Types.PAGINATION_SET_PAGE, payload: page });
};

const dynamicSort = (property: string) => {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a: any, b: any) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}