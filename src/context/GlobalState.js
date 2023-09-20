import React from "react";
import { createContext , useReducer , useContext} from "react";
import ReducerFunctions from "./ReducerFunctions";
import { initialState } from "./ReducerFunctions";
// create a context because shear data between components
const GlobalContext = createContext();
// use the Context and input value data
const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReducerFunctions , initialState);
  return (
    <GlobalContext.Provider value={{
        basket:state.basket,
        dispatch:dispatch
    }}>
        { children }
    </GlobalContext.Provider>
  )
}
export default GlobalContextProvider
// use context with data 
export const useAuth = ()=>{
    return useContext(GlobalContext);
}