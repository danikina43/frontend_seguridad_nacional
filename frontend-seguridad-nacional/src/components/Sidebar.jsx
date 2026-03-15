import { Link } from "react-router-dom"

import {
  FaHome,
  FaFileAlt,
  FaPlusCircle,
  FaBell,
  FaUsers,
  FaUserShield,
  FaCar,
  FaIdCard,
  FaCogs
} from "react-icons/fa"

function Sidebar(){

  return(

    <div className="sidebar">

      <h2 className="logo">Seguridad Nacional</h2>

      <div className="menu">

        <Link className="menu-item" to="/">
          <FaHome className="icon"/> Dashboard
        </Link>

        <Link className="menu-item" to="/reportes">
          <FaFileAlt className="icon"/> Reportes
        </Link>

        <Link className="menu-item" to="/crear-reporte">
          <FaPlusCircle className="icon"/> Crear Reporte
        </Link>

        <Link className="menu-item" to="/alertas">
          <FaBell className="icon"/> Alertas
        </Link>

        <Link className="menu-item" to="/guardas">
          <FaUserShield className="icon"/> Guardas
        </Link>

        <Link className="menu-item" to="/supervisores">
          <FaUsers className="icon"/> Supervisores
        </Link>

        <Link className="menu-item" to="/personas">
          <FaIdCard className="icon"/> Personas
        </Link>

        <Link className="menu-item" to="/usuarios">
          <FaUsers className="icon"/> Usuarios
        </Link>

        <Link className="menu-item" to="/roles">
          <FaUsers className="icon"/> Roles
        </Link>

        <Link className="menu-item" to="/vehiculos">
          <FaCar className="icon"/> Vehículos
        </Link>

        <Link className="menu-item" to="/conductores">
          <FaUsers className="icon"/> Conductores
        </Link>

        <Link className="menu-item" to="/configuracion">
          <FaCogs className="icon"/> Configuración
        </Link>

      </div>

    </div>

  )

}

export default Sidebar;