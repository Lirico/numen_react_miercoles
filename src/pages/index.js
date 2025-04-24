import Contador from "@/components/clase_3/Contador";
import BooList from "@/components/clase_4/BooList";
import RelojEffect from "@/components/clase_4/RelojEffect";
import BooksContextProvider from "@/context/BooksContextProvider";

export default function Home() {
  return (
    <>
      <BooksContextProvider>
        <BooList />
        <Contador/>
        <RelojEffect />
      </BooksContextProvider>
    </>
  );
}
