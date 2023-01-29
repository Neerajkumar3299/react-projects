import {useState,useContext,useEffect, createContext } from "react";
import { links } from "../data";
const appContext=createContext();
const AppProvider=({children})=>{
    const [linkList, setLinkList] = useState(links);
    const [showSidebar,setShowSidebar]=useState(false);
    const [showModal,setShowModal]=useState(false);
    const openSidebar=()=>{
        setShowSidebar(true);
    }
    const closeSidebar=()=>{
        setShowSidebar(false);
    }
    const openModal=()=>{
        setShowModal(true);
    }
    const closeModal=()=>{
        setShowModal(false);
    }
    return <appContext.Provider value={{linkList,openSidebar,closeSidebar,openModal,closeModal,showSidebar,showModal}}>
        {children}
    </appContext.Provider>
}
const useContextData=()=>{
    return useContext(appContext)
}
export {AppProvider,useContextData}