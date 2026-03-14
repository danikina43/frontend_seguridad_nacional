import { Link } from "react-router-dom"

function Sidebar(){

  return(

    <div style={{
      width:"240px",
      background:"#020617",
      color:"white",
      height:"100vh",
      padding:"20px"
    }}>

      <h2>Seguridad Nacional</h2>

      <p style={{color:"#94a3b8", marginTop:"20px"}}>
        PRINCIPAL
      </p>

      <ul style={{listStyle:"none", padding:"0"}}>

        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/crear-reporte">Crear reporte</Link></li>
        <li><Link to="/alertas">Alertas</Link></li>

      </ul>

      <p style={{color:"#94a3b8", marginTop:"20px"}}>
        PERSONAL
      </p>

      <ul style={{listStyle:"none", padding:"0"}}>

        <li><Link to="/guardas">Guardas</Link></li>
        <li><Link to="/supervisores">Supervisores</Link></li>
        <li><Link to="/admin">Personal Admin</Link></li>

      </ul>

      <p style={{color:"#94a3b8", marginTop:"20px"}}>
        CONFIGURACIÓN
      </p>

      <ul style={{listStyle:"none", padding:"0"}}>

        <li><Link to="/personas">Personas</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/vehiculos">Vehículos</Link></li>

      </ul>

      

    </div>

  )

}

export default Sidebar;