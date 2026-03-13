import { useState } from "react"
import ReportForm from "../components/ReportForm"
import ReportTable from "../components/ReportTable"

function Dashboard(){

  const [reports, setReports] = useState([])

  const addReport = (descripcion)=>{
    setReports([...reports, descripcion])
  }

  const deleteReport = (index)=>{
    const newReports = reports.filter((_,i)=> i !== index)
    setReports(newReports)
  }

  return(

    <div>

      <h2>Panel de Control</h2>

      <ReportForm addReport={addReport} />

      <ReportTable
        reports={reports}
        deleteReport={deleteReport}
      />

    </div>

  )

}

export default Dashboard