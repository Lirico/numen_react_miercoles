// Paso 1 - Importar la funcion para crear el contexto (la nave)
import { createContext, useState } from "react"

// Paso 2 - La nave -> []
export const BooksContext = createContext()

// Paso 3 - Definir el paquete (estados y props)
// Paso 4 - Invocamos al flaco de la gorra (provider)
// Paso 5 - Le colocamos el paquete en la mano al flaco (atributo value del provider)
// Paso 6 - Defini la lista de componentes que pueden acceder al paquete (children)
const BooksContextProvider = ({children}) => {
    const [books, setBooks] = useState(() => [
        {id: 1, title: 'Código Da Vinci', author: 'Dan Brown'},
        {id: 2, title: 'Harry Potter', author: 'J. K. Rowling'},
        {id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry'}
    ]
)

  return (
    <BooksContext.Provider value={books}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider
