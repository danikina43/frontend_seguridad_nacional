import StatCard from "../components/StatCard"
import ReportChart from "../components/ReportChart"
import Notifications from "../components/Notificaciones"

import { reportes, guardas, alertas } from "../data/mockData"

function Dashboard(){

  return(

    <div style={{padding:"20px", color:"white"}}>

      <h2>Dashboard</h2>

      {/* Tarjetas estadísticas */}

      <div
        style={{
          display:"flex",
          gap:"20px",
          marginTop:"20px",
          flexWrap:"wrap"
        }}
      >

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
          title="Alertas"
          value={alertas.length}
          color="#ef4444"
        />

        <StatCard
          title="Vehículos registrados"
          value="12"
          color="#3b82f6"
        />

      </div>
      <div className="card" style={{marginTop:"30px"}}>
        <h3>Estadisticas del sistema</h3>
        <ul>
          <li>Total reportes registrados</li>
          <li>Total usuarios del sistema</li>
          <li>Vehículos registrados</li>
          <li>Alertas activas</li>
        </ul>
      </div>


      {/* Gráfica */}

      <div style={{marginTop:"30px"}}>

        <ReportChart />

      </div>
      <div style={{marginTop:"30px"}}>

        <Notifications /> 
      </div>


      {/* Actividad reciente */}

      <div
        style={{
          background:"#1e293b",
          marginTop:"30px",
          padding:"20px",
          borderRadius:"10px"
        }}
      >

        <h3>Actividad reciente</h3>

        <ul>

          <li>Nuevo reporte creado</li>
          <li>Supervisor revisó un reporte</li>
          <li>Nuevo guarda registrado</li>
          <li>Vehículo ingresó al sistema</li>

        </ul>

      </div>

    </div>

  )

}

export default Dashboard;