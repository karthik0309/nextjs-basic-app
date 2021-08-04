import React, { createContext } from "react";
import {ActionType,State} from './Types'

type ContextType = {
    state: State;
    dispatch: React.Dispatch<ActionType>;
};

const initialState:State={
    keywords:[]
}

const GlobalState = createContext<ContextType>({
    state: initialState,
    dispatch: () => {},
});
  
export default GlobalState;