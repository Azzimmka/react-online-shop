import Header from "./components/Header";
import Card from "./components/Card";
import { createContext, useEffect, useReducer, type Dispatch } from "react";
import { reducer, intialState } from "./utils/reducer";
import type * as type from "./utils/types";
import { apiCall } from "./utils/apiCall";


interface ContextType { state: type.State; dispatch: Dispatch<type.Action> };

export const Context = createContext<ContextType | null>(null);

// передадим в useReucer для начального значения и [state, dispatch] - state возьмёт их в себя и передаст в Conte


function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(()=>{
    apiCall('/products', 'GET')
    .then(response => response.data)
    .then(products => {
      dispatch({
        type: 'SET_PRODUCTS',
        payload: products
      })
    })
    .catch(error => {
      console.error(error)
      dispatch({
        type: 'SET_PRODUCTS',
        payload: error
      })
  })
  }, [])

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Header />
      <Card />
    </Context.Provider>
  );
}

export default App;
