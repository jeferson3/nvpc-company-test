import React, { PropsWithChildren, useReducer } from "react";
import { RepositoryContext } from "./context";
import { data } from "./data";
import { RepositoryReducer } from "./reducer";

export const RepositoryContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(RepositoryReducer, data);
    return <RepositoryContext.Provider value={{state, dispatch}}>{ children }</RepositoryContext.Provider>
}