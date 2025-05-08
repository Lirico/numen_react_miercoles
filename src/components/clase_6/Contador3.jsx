import { useReducer } from "react";
import { TYPES } from "@/reducer/actions";
import { initialState } from "@/reducer/initialState";
import { reducer } from "@/reducer/reducer";

const Contador3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState) 

  const decrementar = () => dispatch({type: TYPES.DECREMENTAR, payload: 3})

  const resetear = () => dispatch({type: TYPES.RESETEAR})

  const incrementar = () => dispatch({type: TYPES.INCREMENTAR, payload: 3})

  const mostrar = () => dispatch({type: TYPES.MOSTRAR})

  const ocultar = () => dispatch({type: TYPES.OCULTAR})
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={decrementar}>-</button>
          <button onClick={resetear}>0</button>
          <button onClick={incrementar}>+</button>
          <button onClick={mostrar}>Mostrar</button>
          <button onClick={ocultar}>Ocultar</button>
        </div>
        {state.visible && <h3>{state.contador}</h3>}
      </div>
    </>
  );
};

export default Contador3;
