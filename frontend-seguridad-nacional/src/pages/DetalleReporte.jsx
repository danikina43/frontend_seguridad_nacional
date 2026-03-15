import { useParams } from "react-router-dom"
import { reportes, statusReporte } from "../data/mockData"

function DetalleReporte() {

  const { id } = useParams()

  const reporte = reportes.find((r) => r.id == id)

  if (!reporte) {
    return <h2 style={{ color: "white" }}>Reporte no encontrado</h2>
  }

  return (

    <div style={{ color: "white", padding: "20px" }}>

      <h2>Detalle del Reporte</h2>

      <p><b>ID:</b> {reporte.id}</p>
      <p><b>Fecha:</b> {reporte.fecha}</p>
      <p><b>Descripción:</b> {reporte.descripcion}</p>
      <p><b>Tipo:</b> {reporte.tipo}</p>

      <p>
        <b>Estado:</b>
        {
          statusReporte.find(
            s => s.id === reporte.status_reporte_id_status_reporte
          )?.nombre
        }
      </p>

      <div style={{ marginTop: "20px" }}>

        <button
          style={{
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: "8px",
            marginRight: "10px"
          }}
        >
          Recibir
        </button>

        <button
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px"
          }}
        >
          Devolver
        </button>

      </div>

    </div>

  )

}

export default DetalleReporte;