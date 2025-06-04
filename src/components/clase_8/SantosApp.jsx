import { useState } from "react";
import SantosForm from "./SantosForm";
import SantosTable from "./SantosTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
  },
];

const SantosApp = () => {
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    // GET
    const readData = () => {}

    // POST
    const createData = (formData) => {
      formData.id = Date.now()

      setDb((db) => {
        return [
          ...db,
          formData
        ]
      })
    }

    // PUT
    const updateData = (formData) => {
      let newData = db.map(caballero => caballero.id === formData.id
        ? formData
        : caballero
      )
      setDb(newData)
    }

    // DELETE
    const deleteData = (tableData) => {
      let isDelete = confirm(`Estas seguro de que queres eliminar a ${tableData.name} de ${tableData.constellation}?`)

      if(isDelete){
        let newData = db.filter(caballero => caballero.id !== tableData.id)

        setDb(newData)
      } else {
        return;
      }
    }

  return (
    <>
      <div>
        <h2>CRUD App</h2>
        <SantosForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
        <SantosTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />
      </div>
    </>
  );
};

export default SantosApp;
