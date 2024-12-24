import React,{useState,createContext} from 'react'
export const bgContext = createContext();
const StateContext = ({children}) => {
    const [state,setState] = useState(-1);
    const [Location,setLocation] = useState([])
    const [size,setSize] = useState(0)
    const [opacity,setOpacity] = useState(0)
    const [routes,setRoutes] = useState([]);
    const [data ,setData] = useState([]);
  return (
    <bgContext.Provider value={[state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,data,setData]}>
        {children}
    </bgContext.Provider>
  )
}

export default StateContext