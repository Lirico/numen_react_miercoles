import { useState, useEffect } from "react";

// useEffect

// CICLO DE VIDA DE UN COMPONENTE

/* 
    FASE DE MONTAJE
    FASE DE ACTUALIZACION
    FASE DE DESMONTAJE
*/

const initialState = 0;

const Contador = () => {
  const [contador, setContador] = useState(initialState);

  useEffect(() => { 
    if(contador < 10){
        console.log('Has modificado el contadorcito')
        return;
    }

    return () => console.log('Se jue')
  }, [contador])
  

  const decrementar = () => setContador(contador => contador - 1);

  const resetear = () => setContador(initialState);

  const incrementar = () => setContador(contador => contador + 1)

  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {
            contador > 10 ? null : <h3>{contador}</h3>
        }
        <div>
          <button onClick={decrementar}>-</button>
          <button onClick={resetear}>0</button>
          <button onClick={incrementar}>+</button>
        </div>
      </div>
    </>
  );
};

export default Contador;
