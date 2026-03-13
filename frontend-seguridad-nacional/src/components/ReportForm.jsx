import { useState } from "react";

function ReportForm({ addReport }) {
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addReport(descripcion);
    setDescripcion("");
  };

  return (
    <div>
      <h3>Registrar reporte</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Descripción del reporte"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <br /><br />

        <button type="submit">Guardar reporte</button>
      </form>
    </div>
  );
}

export default ReportForm;