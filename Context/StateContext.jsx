import React,{useState,createContext} from 'react'
export const bgContext = createContext();
const StateContext = ({children}) => {
    const [state,setState] = useState(-1);
    const [Location,setLocation] = useState([])
    const [size,setSize] = useState(0)
    const [opacity,setOpacity] = useState(0)
    const [routes,setRoutes] = useState([]);
    const [info ,setInfo] = useState([]);
    const [code,setCode] = useState(null);
    const [click,setClicked] = useState(false)
    const [value,setValue] = useState([])
    const [bookmarks, setBookmarks] = useState({});
    const [scanned,setScanned] = useState([])
  return (
    <bgContext.Provider value={[state,setState,Location,setLocation,size,setSize,opacity,setOpacity,routes,setRoutes,info,setInfo,code,setCode,click,setClicked,value,setValue,bookmarks,setBookmarks,scanned,setScanned]}>
        {children}
    </bgContext.Provider>
  )
}

export default StateContext