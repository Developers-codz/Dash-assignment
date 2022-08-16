import {useContext,createContext,useState} from "react" ;


const AsideContext = createContext();

const AsideProvider = ({children}) =>{
    const [isDrawerOpen,setDrawerOpen] = useState(false)
    return (
        <AsideContext.Provider value={{isDrawerOpen,setDrawerOpen}}>
            {children}
        </AsideContext.Provider>
    )
}

const useAside = () => useContext(AsideContext);

export {AsideProvider,useAside}