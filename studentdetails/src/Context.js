//Context creation
// provider
// consumer lengthy remove usecontext hook
// usecontext hook
import React,{useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    return (
        <AppContext.Provider value={"Shree"}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};