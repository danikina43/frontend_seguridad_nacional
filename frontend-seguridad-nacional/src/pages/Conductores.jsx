import { useState } from "react"

function Conductores(){

  const [busqueda, setBusqueda] = useState("")

  const conductores = [
    {id:1, nombre:"Juan Pérez", documento:"12345678", telefono:"3001234567"},
    {id:2, nombre:"Carlos López", documento:"87654321", telefono:"3109876543"},
    {id:3, nombre:"Luis Torres", documento:"45678912", telefono:"3204567890"}
  ]

  const conductoresFiltrados = conductores.filter((c)=>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Conductores</h2>

      <div style={{display:"flex", gap:"10px", marginBottom:"20px"}}>

        <input
          type="text"
          placeholder="Buscar conductor..."
          value={busqueda}
          onChange={(e)=>setBusqueda(e.target.value)}
        />

        <button
          style={{
            background:"#2563eb",
            color:"white",
            border:"none",
            padding:"8px 12px",
            borderRadius:"6px"
          }}
        >
          + Nuevo conductor
        </button>

      </div>

      <table style={{
        width:"100%",
        background:"#1e293b",
        borderRadius:"8px"
      }}>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {conductoresFiltrados.map((c)=>(
            <tr key={c.id}>

              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.documento}</td>
              <td>{c.telefono}</td>

              <td>

                <button style={{marginRight:"5px"}}>
                  Editar
                </button>

                <button>
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

export default Conductores;