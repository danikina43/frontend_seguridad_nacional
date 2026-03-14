import { useState } from "react"
import { tiposReporte } from "../data/mockData"

function CrearReporte(){

  const [fecha, setFecha] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [tipoReporte, setTipoReporte] = useState("")
  const [estado, setEstado] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    const nuevoReporte = {
      fecha_creacion: fecha,
      descripcion: descripcion,
      usuario_id_usuario_generador: 1,
      tipo_reporte_id_tipo_reporte: tipoReporte,
      status_reporte_id_status_reporte: estado
    }

    console.log(nuevoReporte)
  }

  return(

    <div style={{color:"white"}}>

      <h2>Crear Reporte</h2>

      <form onSubmit={handleSubmit}>

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
        />

        <br/><br/>

<label>Tipo de reporte</label>

<select
  value={tipoReporte}
  onChange={(e)=>setTipoReporte(e.target.value)}
>

  <option value="">Seleccione</option>

  {tiposReporte.map((tipo)=>(
    <option key={tipo.id} value={tipo.id}>
      {tipo.nombre}
    </option>
  ))}

</select>
       

        <br/><br/>

        <label>Estado</label>
        <select
          value={estado}
          onChange={(e)=>setEstado(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="1">Pendiente</option>
          <option value="2">Recibido</option>
          <option value="3">Devuelto</option>
        </select>

        <br/><br/>

        <label>Descripción</label>

        <textarea
          value={descripcion}
          onChange={(e)=>setDescripcion(e.target.value)}
        />

        <br/><br/>

        <button type="submit">
          Guardar reporte
        </button>

      </form>

    </div>

  )

}

export default CrearReporte;