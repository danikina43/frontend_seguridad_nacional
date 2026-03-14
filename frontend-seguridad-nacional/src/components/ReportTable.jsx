import { statusReporte } from "../data/mockData"

function ReportTable({ reportes }){

  return(

    <div style={{
      background:"#1e293b",
      padding:"20px",
      borderRadius:"10px",
      color:"white"
    }}>

      <h3>Mis últimos reportes</h3>

      <table style={{width:"100%", marginTop:"15px"}}>

        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Estado</th>
          </tr>
        </thead>

<tbody>

{reportes.map((r)=>(
  <tr key={r.id}>

    <td>{r.fecha}</td>
    <td>{r.descripcion}</td>
    <td>{r.tipo}</td>

    <td>
      {
        statusReporte.find(
          s => s.id === r.status_reporte_id_status_reporte
        )?.nombre
      }
    </td>

    <td>

      <button style={{
        background:"#22c55e",
        color:"white",
        border:"none",
        padding:"6px"
      }}>
        Recibir
      </button>

      <button style={{
        background:"#ef4444",
        color:"white",
        border:"none",
        padding:"6px",
        marginLeft:"5px"
      }}>
        Devolver
      </button>

    </td>

  </tr>
))}

</tbody>

      </table>

    </div>

  )

}

export default ReportTable;