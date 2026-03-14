import "../styles/dashboard.css"

import StatCard from "../components/StatCard"
import ReportTable from "../components/ReportTable"
import AlertPanel from "../components/AlertPanel"

import { reportes, guardas, alertas } from "../data/mockData"

function Dashboard(){

  return(

    <div style={{color:"white"}}>

      <h2>Dashboard</h2>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"20px"
      }}>

        <StatCard
          title="Reportes totales"
          value={reportes.length}
          color="#facc15"
        />

        <StatCard
          title="Guardas activos"
          value={guardas.length}
          color="#22c55e"
        />

        <StatCard
          title="Alertas no leídas"
          value={alertas.length}
          color="#ef4444"
        />

      </div>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={{flex:3}}>
          <ReportTable reportes={reportes}/>
        </div>

        <AlertPanel alertas={alertas}/>

      </div>

    </div>

  )

}

export default Dashboard;