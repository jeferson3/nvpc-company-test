
export interface IRepository {
    id: number,
    name: string,
    url: string,
    description: string,
    visibility: string,
    archived: bool,
    disabled: bool,
    language: string,
    topics: Array<string>
    created_at: Date,
    updated_at: Date
}

export type IRepositoryPagination = {
    data: IRepository[],
    page: number,
}

export type ContextRepositoryType = {
    state: StateRepository,
    dispatch: React.Dispatch<ActionRepository>
}

export interface ActionRepository {
    type: Types;
    payload?: any;
}

export interface StateRepository {
    loading: boolean,
    more: boolean,
    repositories: {
        data: IRepository[],
        page: number,
    }
}

export enum Types {
    SET_LOADING = 'SET_LOADING',
    SET_HAS_MORE_DATA = 'SET_HAS_MORE_DATA',
    SET_NO_MORE_DATA = 'SET_NO_MORE_DATA',
    SET_REPOSITORIES = 'SET_REPOSITORIES',
    MORE_REPOSITORIES = 'MORE_REPOSITORIES',
    UPDATE_REPOSITORIES = 'UPDATE_REPOSITORIES',
    PAGINATION_SET_PAGE = 'PAGINATION_SET_PAGE'
}

export enum OrderType {
    DATE = 'DATE',
    STRING = 'STRING',
}

export interface Order {
    field: string,
    type: OrderType
}

export interface RepositorySearchBuilderI {
    
    isArchived(): boolean|string;

    isDisabled(): boolean|string;

    hasSearch(): boolean;

    getSearch(): string;
}