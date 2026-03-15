import { useState } from "react"
import { tiposReporte, statusReporte } from "../data/mockData"

function CrearReporte() {

  const [fecha, setFecha] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [tipoReporte, setTipoReporte] = useState("")
  const [estado, setEstado] = useState("1")

  const handleSubmit = (e) => {

    e.preventDefault()

    const nuevoReporte = {
      fecha_creacion: fecha,
      descripcion: descripcion,
      usuario_id_usuario_generador: 1,
      tipo_reporte_id_tipo_reporte: tipoReporte,
      status_reporte_id_status_reporte: estado
    }

    console.log("Reporte creado:", nuevoReporte)

    alert("Reporte creado correctamente")

  }

  return (

    <div style={{ color: "white", padding: "20px" }}>

      <h2>Crear Reporte</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "400px"
        }}
      >

        <label>Fecha</label>

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Tipo de reporte</label>

        <select
          value={tipoReporte}
          onChange={(e) => setTipoReporte(e.target.value)}
        >

          <option value="">Seleccione</option>

          {tiposReporte.map((tipo) => (

            <option key={tipo.id} value={tipo.id}>
              {tipo.nombre}
            </option>

          ))}

        </select>

        <label>Descripción</label>

        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <label>Estado</label>

        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >

          {statusReporte.map((s) => (

            <option key={s.id} value={s.id}>
              {s.nombre}
            </option>

          ))}

        </select>

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "6px"
          }}
        >
          Guardar reporte
        </button>

      </form>

    </div>

  )

}

export default CrearReporte;