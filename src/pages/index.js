import Footer from "@/components/clase_5/Footer";
import Header from "@/components/clase_5/Header";
import Main from "@/components/clase_5/Main";
import LanguageContextProvider from "@/context/LanguageContextProvider";
import ThemeContextProvider from "@/context/ThemeContextProvider";


export default function Home() {
  return (
    <>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Header />
          <Main />
          <Footer />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  );
}
