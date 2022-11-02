import {
  ActionRepository,
  StateRepository,
  Types,
} from "../../@types/context_repository.d";

export const RepositoryReducer = (
  state: StateRepository,
  action: ActionRepository
): StateRepository => {

  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, loading: !state.loading };
    case Types.SET_NO_MORE_DATA:
      return { ...state, more: false };
    case Types.SET_HAS_MORE_DATA:
      return { ...state, more: true };
    case Types.SET_REPOSITORIES:
      return { ...state, repositories: action.payload };    
    case Types.MORE_REPOSITORIES:
      return { ...state, repositories: {...state.repositories, data: [...state.repositories.data, ...action.payload.data] }};
    case Types.PAGINATION_SET_PAGE:
      return {
        ...state,
        repositories: { ...state.repositories, page: action.payload },
      };
    case Types.UPDATE_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return { ...state };
  }
};
