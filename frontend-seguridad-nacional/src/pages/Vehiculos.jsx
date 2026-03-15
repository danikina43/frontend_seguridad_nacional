import { useState } from "react"

function Vehiculos(){

  const [busqueda, setBusqueda] = useState("")

  const vehiculos = [
    {id:1, placa:"ABC123", tipo:"Camión", conductor:"Juan Pérez"},
    {id:2, placa:"XYZ987", tipo:"Automóvil", conductor:"Carlos López"},
    {id:3, placa:"JKL456", tipo:"Moto", conductor:"Luis Torres"}
  ]

  const vehiculosFiltrados = vehiculos.filter((v)=>
    v.placa.toLowerCase().includes(busqueda.toLowerCase())
  )

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Vehículos</h2>

      <div style={{display:"flex", gap:"10px", marginBottom:"20px"}}>

        <input
          type="text"
          placeholder="Buscar por placa..."
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
          + Nuevo vehículo
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
            <th>Placa</th>
            <th>Tipo</th>
            <th>Conductor</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {vehiculosFiltrados.map((v)=>(
            <tr key={v.id}>

              <td>{v.id}</td>
              <td>{v.placa}</td>
              <td>{v.tipo}</td>
              <td>{v.conductor}</td>

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

export default Vehiculos;