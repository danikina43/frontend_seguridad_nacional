import { useEffect, useState } from "react";
import { obtenerReportes } from "../api/reportService";

function Dashboard(){

  const [reportes, setReportes] = useState([]);

  useEffect(()=>{

    obtenerReportes().then(data=>{
      setReportes(data);
    });

  },[]);

  return(

    <div>

      <h2>Dashboard</h2>

      <p>Total reportes: {reportes.length}</p>

    </div>

  );

}

export default Dashboard;