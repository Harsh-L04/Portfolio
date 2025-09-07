import {  createContext, useContext, useEffect, useState } from "react";

const Themeconst = createContext();

export const Themeprovider = ({children})=> {
    const [isDark, toggler]=useState(
      localStorage.getItem("theme") || "black"  
    );
    useEffect(()=>{
        const root= window.document.documentElement;
        if(isDark==="dark")
            root.classList.add("dark");
        else
            root.classList.remove("dark");
        localStorage.setItem("theme",isDark);
    }, [isDark]);
    return (
        <Themeconst.Provider 
        value={{isDark: isDark==="dark",toggler}}
        >
            {children}
        </Themeconst.Provider>
    );
};
export const useTheme = ()=> useContext(Themeconst);