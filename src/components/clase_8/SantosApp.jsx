import { useState, useEffect } from "react";
import SantosForm from "./SantosForm";
import SantosTable from "./SantosTable";
import axios from "axios";

const initialDb = [];

const SantosApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  // GET
  const readData = async () => {
    const ENDPOINT = "http://localhost:8000/santos";
    const response = await axios.get(ENDPOINT);
    const data = response.data;

    setDb(data);
  };

  useEffect(() => {
    readData();
  }, []);

  // POST
  const createData = async (formData) => {
    formData.id = String(Date.now());
    
    const ENDPOINT = "http://localhost:8000/santos";
    const REQUEST = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(formData),
    };

    await axios(ENDPOINT, REQUEST);

    readData();
  };

  // PUT
  const updateData = async (formData) => {
    const ENDPOINT = `http://localhost:8000/santos/${formData.id}`;

    const REQUEST = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(formData),
    };

    await axios(ENDPOINT, REQUEST);

    readData();
  };

  // DELETE
  const deleteData = async (tableData) => {
    let isDelete = confirm(
      `Estas seguro de que queres eliminar a ${tableData.name} de ${tableData.constellation}?`
    );

    if (isDelete) {
      const ENDPOINT = `http://localhost:8000/santos/${tableData.id}`;

      const REQUEST = {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      };

      await axios(ENDPOINT, REQUEST);

      readData();
    } else {
      return;
    }
  };

  return (
    <>
      <div>
        <h2>CRUD App</h2>
        <SantosForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <SantosTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </>
  );
};

export default SantosApp;
