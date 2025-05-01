import { ThemeContext } from "@/context/ThemeContextProvider";
import { LanguageContext } from "@/context/LanguageContextProvider";
import { useContext } from "react";

const Main = () => {

  const {toggleTheme} = useContext(ThemeContext)
  const { toggleLanguage } = useContext(LanguageContext);
  const {title, subtitle, text} = toggleLanguage

  return (
    <>
        <main className={toggleTheme}>
          <section>
            <h2>{title}</h2> {/* true -> english.title / false -> spanish.title */}
            <h3>{subtitle}</h3>
            <p>{text}</p>
          </section>
        </main>

        <style jsx>{`
            main {
                height: 100vh;
            }
        `}</style>
    </>
  )
}

export default Main