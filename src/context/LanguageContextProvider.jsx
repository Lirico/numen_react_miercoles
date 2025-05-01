import { createContext, useState } from "react"

export const LanguageContext = createContext();

const LanguageContextProvider = ({children}) => {

    const [language, setLanguage] = useState(false)

    const handleLanguage = () => setLanguage(!language)

    const spanish = {
        title: "Titulo de seccion",
        subtitle: "Subtitulo de seccion",
        text: "En el futuro lucharan, nuestras estrellas brillaran, un suenio vendran para conquistar, dentro de la oscuridad un heroe resucitara, como el fenix lograra surgir..."
    }

    const english = {
        title: 'Section title',
        subtitle: 'Section subtitle',
        text: 'In the future they will fight, our stars will shine, a dream will come to conquer, within the darkness a hero will rise, like the fenix will manage to emerge...'
    }

    const toggleLanguage = language ? english : spanish

    const toggleFlag = language ? "spain.png" : "uk.png"

    const data = {handleLanguage, toggleLanguage, toggleFlag}

  return (
    <>
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    </>
  )
}

export default LanguageContextProvider