

import SantosTableRow from './SantosTableRow'

const SantosTable = ({data, deleteData, setDataToEdit}) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
         {
            data.map(caballero => <SantosTableRow key={caballero.id} caballero={caballero} deleteData={deleteData} setDataToEdit={setDataToEdit} />)
         }
        </tbody>
      </table>
    </div>
  )
}

export default SantosTable