//Context creation
// provider
// consumer lengthy remove usecontext hook
// usecontext hook
import React,{useContext,useReducer,useEffect} from "react";
import Reducer from "./Reducer";
let API= "https://jsonplaceholder.typicode.com/users";

const initialState={
    isLoading: true,
    Array: [],
}

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(Reducer, initialState);

    

    const fetchApiData = async(url) =>{ 
      try{
  
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);
        dispatch({
            Array:"GET_STUDENTS",
            payload:{
                Array: data.Array,
                
            }
        });
        // isLoading = false;
      }
      catch(error){
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchApiData(`${API}`);
    }, []);


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