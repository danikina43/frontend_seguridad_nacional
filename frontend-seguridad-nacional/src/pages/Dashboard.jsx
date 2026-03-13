import { useState } from "react";
import ReportForm from "../components/ReportForm";
import ReportList from "../components/ReportList";

function Dashboard(){

  const [reports, setReports] = useState([]);

  const addReport = (descripcion)=>{
    if(!descripcion.trim()) return;

    setReports([...reports, descripcion]);
  };

  return(
    <div style={{padding:"20px"}}>

      <h2>Panel de Control</h2>

      <ReportForm addReport={addReport} />

      <ReportList reports={reports} />

    </div>
  );
}

export default Dashboard;