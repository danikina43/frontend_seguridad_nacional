import { useState } from "react"

function Personas(){

  const [busqueda, setBusqueda] = useState("")

  const personas = [
    {id:1, nombre:"Carlos López", documento:"12345678", telefono:"3001234567"},
    {id:2, nombre:"Ana Torres", documento:"87654321", telefono:"3109876543"},
    {id:3, nombre:"Luis Pérez", documento:"45678912", telefono:"3204567890"}
  ]

  const personasFiltradas = personas.filter((p)=>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Personas</h2>

      <div style={{display:"flex", gap:"10px", marginBottom:"20px"}}>

        <input
          type="text"
          placeholder="Buscar persona..."
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
          + Nueva persona
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

          {personasFiltradas.map((p)=>(
            <tr key={p.id}>

              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.documento}</td>
              <td>{p.telefono}</td>

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

export default Personas;