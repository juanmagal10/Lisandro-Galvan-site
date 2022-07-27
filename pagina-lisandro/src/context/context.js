import { createContext, useContext } from "react";


export const DataContext = createContext();

export const DataContextProvider = (props) => {
    
    const getHeigth = (element) => {
        const heigth=element.getBoundingClientRect()
        console.log(heigth)
    }
    const value = getHeigth()
   
    
    return (
        <DataContext.Provider value={value} >
            {props.children}
        </DataContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(DataContextProvider)
}

