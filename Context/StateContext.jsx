import React,{useState,createContext} from 'react'
export const bgContext = createContext();
const StateContext = ({children}) => {
    const [state,setState] = useState(-1);
  return (
    <bgContext.Provider value={[state,setState]}>
        {children}
    </bgContext.Provider>
  )
}

export default StateContext