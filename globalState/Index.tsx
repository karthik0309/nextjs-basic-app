import React, { useContext, useReducer } from "react";
import {State} from './Types'
import GlobalState from "./GlobalState";
import Reducer from "./Reducer";

const initialState:State={
    keywords:['Blockchain'],
}

const StateProvider:React.FC = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <GlobalState.Provider value={{ state, dispatch }}>  
            {children}
        </GlobalState.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalState);
export default StateProvider;

