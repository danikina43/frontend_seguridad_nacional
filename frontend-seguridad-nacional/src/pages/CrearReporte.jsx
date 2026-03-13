import { useState } from "react";

function CrearReporte({ addReport }) {

  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [foto, setFoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoReporte = {
      tipo,
      fecha,
      hora,
      lugar,
      descripcion,
      foto,
      estado: "Pendiente"
    };

    addReport(nuevoReporte);

    setTipo("");
    setFecha("");
    setHora("");
    setLugar("");
    setDescripcion("");
    setFoto(null);
  };

  return (

    <div>

      <h2>Crear Reporte</h2>

      <form onSubmit={handleSubmit}>

        <label>Tipo de reporte</label>
        <select value={tipo} onChange={(e)=>setTipo(e.target.value)}>
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
          placeholder="Lugar del incidente"
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

        <label>Foto del reporte</label>
        <input
          type="file"
          onChange={(e)=>setFoto(e.target.files[0])}
        />

        <br/><br/>

        <button type="submit">
          Guardar reporte
        </button>

      </form>

    </div>

  );

}

export default CrearReporte;