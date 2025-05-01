import { ThemeContext } from "@/context/ThemeContextProvider";
import { LanguageContext } from "@/context/LanguageContextProvider";
import { useContext } from "react";

const Header = () => {
  const { handleTheme, toggleTheme, toggleIcon } = useContext(ThemeContext);
  const { handleLanguage, toggleFlag } = useContext(LanguageContext);
  
  return (
    <>
      <header className={toggleTheme}>
        <button onClick={handleTheme}>{toggleIcon}</button>
        <button onClick={handleLanguage}><img src={toggleFlag} alt="" /></button>
      </header>

      <style jsx>{`
        header {
          display: flex;
          align-items: center;
        }
        button {
          background-color: transparent;
          border: none;
          font-size: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default Header;
