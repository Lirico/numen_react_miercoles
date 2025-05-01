import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false)

    const handleTheme = () => setTheme(!theme) // toggler

    const toggleTheme = theme ? 'dark' : 'light'

    const toggleIcon = theme ? "🌙" : "☀️"

    const data = { handleTheme, toggleTheme, toggleIcon }

  return (
    <ThemeContext.Provider value={data}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider




    // onclick -> input -> ligh
    // onclick -> input -> dark

    // Handlers -> Manejadoras -> onclick
    // const handleTheme = (event) => {
    //     if(event.target.value === "light"){
    //         setTheme("light")
    //     } else {
    //         setTheme("dark")
    //     }
    // }