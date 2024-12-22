import React,{useState,createContext} from 'react'
export const bgContext = createContext();
const StateContext = ({children}) => {
    const [state,setState] = useState(-1);
    const [Location,setLocation] = useState("")
  return (
    <bgContext.Provider value={[state,setState,Location,setLocation]}>
        {children}
    </bgContext.Provider>
  )
}

export default StateContext