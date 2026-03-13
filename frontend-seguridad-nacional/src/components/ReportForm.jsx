import { useState } from "react";

function ReportForm({ addReport }) {

  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoReporte = {
      tipo,
      fecha,
      hora,
      lugar,
      descripcion,
      estado: "Pendiente"
    };

    addReport(nuevoReporte);

    setTipo("");
    setFecha("");
    setHora("");
    setLugar("");
    setDescripcion("");
  };

  return (

    <div>

      <h3>Registrar reporte</h3>

      <form onSubmit={handleSubmit}>

        <label>Tipo de reporte</label>
        <select
          value={tipo}
          onChange={(e)=>setTipo(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option>Ingreso de personal</option>
          <option>Ingreso de vehículo</option>
          <option>Novedad de seguridad</option>
          <option>Incidente</option>
        </select>

        <br/><br/>

        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
        />

        <br/><br/>

        <label>Hora</label>
        <input
          type="time"
          value={hora}
          onChange={(e)=>setHora(e.target.value)}
        />

        <br/><br/>

        <label>Lugar</label>
        <input
          type="text"
          value={lugar}
          onChange={(e)=>setLugar(e.target.value)}
        />

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

export default ReportForm