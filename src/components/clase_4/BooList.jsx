// Paso 1 - Importa el contexto (Aterriza la nave)
import { BooksContext } from "@/context/BooksContextProvider"
// Paso 2 - Importar el hook que nos permite abrir la nave (CARTERO)
import { useContext } from "react"

// BookList
const BooList = () => {

    // Paso 3 - Extraer el paquete de la nave
    const books = useContext(BooksContext)

  return (
    <ul>
        {
            books.map(book => <li key={book.id}>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
            </li>)
        }
    </ul>
  )
}

export default BooList