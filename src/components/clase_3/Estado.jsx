import { useState } from "react";

// Un HOOK -> Son funciones nativas de React
// useState -> Manipular cambios de estado

const Estado = () => {
  const [cabello, setCabello] = useState("Morocho");

  // SAGA DE FREEZER
  return (
    <>
      <div>{cabello}</div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <button onClick={() => setCabello("Rubio")}>
          Transformar en SSJ 1
        </button>
        <button onClick={() => setCabello("Rubio con rayitos")}>
          Transformar en SSJ 2
        </button>
        <button
          onClick={() => setCabello("Rubio con rayitos y pelo hasta el culo")}
        >
          Transformar en SSJ 3
        </button>
        <button onClick={() => setCabello("El mas facha")}>
          Transformar en SSJ 4
        </button>
        <button onClick={() => setCabello("Colorado vende humo")}>
          Transformar en God
        </button>
        <button onClick={() => setCabello("Turqueza re quemado")}>
          Transformar en SSJ GOD
        </button>
        <button onClick={() => setCabello("Blanco, machote y en cuero")}>
          Transformar en Ultra Instinto
        </button>
        <button onClick={() => setCabello("Morocho")}>
          Volver a la fase normal
        </button>
      </div>
    </>
  );
};

export default Estado;
