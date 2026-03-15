import { Link } from "react-router-dom"

function Sidebar(){

  return(

    <div className="sidebar">

      <h2>Seguridad Nacional</h2>

      <ul>

        <li><button><Link to="/">Dashboard</Link></button></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/alertas">Alertas</Link></li>

        <li><Link to="/guardas">Guardas</Link></li>
        <li><Link to="/supervisores">Supervisores</Link></li>

        <li><Link to="/personas">Personas</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>

        <li><Link to="/vehiculos">Vehículos</Link></li>
        <li><Link to="/conductores">Conductores</Link></li>

      </ul>

    </div>

  )

}

export default Sidebar;