"use client";

import { createContext, ReactNode, useEffect, useState } from "react";


export type ThemeContextType = {
    theme: string;
    toggle: () => void;
};

export const ThemeContext=createContext<ThemeContextType | null>(null)


interface ThemeContextProviderProps {
    children: ReactNode;
  }

const getFromLocalStorage=():string=>{
    if(typeof window !=='undefined'){

        const value:string|null=localStorage.getItem("theme")
        return value || 'light'
    }
    return "light"
}

export const ThemeContextProvider:React.FC<ThemeContextProviderProps>=({children})=>{
    const [theme,setTheme]=useState(getFromLocalStorage())

    const toggle=()=>{
        
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}