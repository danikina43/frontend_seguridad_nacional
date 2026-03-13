function ReportTable({ reports, deleteReport }) {

  return (

    <div>

      <h3>Lista de Reportes</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {reports.map((report, index)=>(
            <tr key={index}>

              <td>{index + 1}</td>

              <td>{report}</td>

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

export default ReportTable