import { useState } from "react"
import { reportes, statusReporte } from "../data/mockData"

function Reportes({ user }) {

  const [busqueda, setBusqueda] = useState("")
  const [estadoFiltro, setEstadoFiltro] = useState("")

  const reportesFiltrados = reportes.filter((r) => {

    const coincideDescripcion =
      r.descripcion.toLowerCase().includes(busqueda.toLowerCase())

    const coincideEstado =
      estadoFiltro === "" ||
      r.status_reporte_id_status_reporte == estadoFiltro

    return coincideDescripcion && coincideEstado

  })

  return (

    <div style={{ color: "white", padding: "20px" }}>

      <h2>Reportes</h2>

      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}>

        <input
          type="text"
          placeholder="Buscar reporte..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: "8px" }}
        />

        <select
          value={estadoFiltro}
          onChange={(e) => setEstadoFiltro(e.target.value)}
          style={{ padding: "8px" }}
        >

          <option value="">Todos los estados</option>

          {statusReporte.map((s) => (
            <option key={s.id} value={s.id}>
              {s.nombre}
            </option>
          ))}

        </select>

        {(user?.rol === "guarda" || user?.rol === "supervisor") && (

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            + Nuevo reporte
          </button>

        )}

      </div>

      <table style={{
        width: "100%",
        background: "#1e293b",
        borderRadius: "8px"
      }}>

        <thead>

          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Estado</th>
          </tr>

        </thead>

        <tbody>

          {reportesFiltrados.length === 0 ? (

            <tr>
              <td colSpan="5">No hay reportes</td>
            </tr>

          ) : (

            reportesFiltrados.map((r) => (

              <tr key={r.id}>

                <td>{r.id}</td>
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

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  )

}

export default Reportes;