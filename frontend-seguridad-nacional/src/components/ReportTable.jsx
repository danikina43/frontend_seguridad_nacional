function ReportTable({ reports, deleteReport }) {

  return (

    <div>

      <h3>Lista de Reportes</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Lugar</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((report, index)=>(
            <tr key={index}>

              <td>{index + 1}</td>
              <td>{report.tipo}</td>
              <td>{report.fecha}</td>
              <td>{report.hora}</td>
              <td>{report.lugar}</td>
              <td>{report.estado}</td>

              <td>

                <button
                  onClick={()=>deleteReport(index)}
                  style={{background:"red", color:"white"}}
                >
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

export default ReportTable;