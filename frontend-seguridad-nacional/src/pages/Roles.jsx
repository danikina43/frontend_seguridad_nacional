import { useState } from "react"

function Roles(){

  const [roles] = useState([
    {id:1, nombre:"Administrador"},
    {id:2, nombre:"Supervisor"},
    {id:3, nombre:"Guarda"}
  ])

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Gestión de Roles</h2>

      <button className="btn-primary" style={{marginBottom:"15px"}}>
        + Nuevo Rol
      </button>

      <table className="table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {roles.map((r)=>(
            <tr key={r.id}>

              <td>{r.id}</td>
              <td>{r.nombre}</td>

              <td>

                <button className="btn-warning" style={{marginRight:"5px"}}>
                  Editar
                </button>

                <button className="btn-danger">
                  Eliminar
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Roles;