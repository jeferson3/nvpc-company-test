import { ContextRepositoryType } from '../../@types/context_repository';
import { createContext, useContext } from "react";

export const RepositoryContext = createContext({} as ContextRepositoryType);

export const useRepositoryContext = () => {
    return useContext(RepositoryContext);
}