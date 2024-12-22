import React,{useState,createContext} from 'react'
export const bgContext = createContext();
const StateContext = ({children}) => {
    const [state,setState] = useState(-1);
    const [Location,setLocation] = useState(0)
    const [size,setSize] = useState(0)
  return (
    <bgContext.Provider value={[state,setState,Location,setLocation,size,setSize]}>
        {children}
    </bgContext.Provider>
  )
}

export default StateContext