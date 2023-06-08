"use client"
const { createContext, useState } = require("react");

export const ThemeContext = createContext()



const ThemeProvider =({children}) => {
    const [theme,setTheme] = useState(false)
    const toggle = ()=>{
        setTheme((prev)=>!prev)
    }
    return(
        <ThemeContext.Provider value={{theme,toggle}}>
        {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider