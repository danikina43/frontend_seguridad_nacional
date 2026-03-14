import { Link } from "react-router-dom";

function Sidebar({ user }) {

  return (

    <div style={{
      width:"200px",
      background:"#34495e",
      color:"white",
      height:"100vh",
      padding:"20px"
    }}>

      <h3>Menú</h3>

      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        {user.rol === "guardia" && (
          <li>
            <Link to="/crear-reporte">Crear Reporte</Link>
          </li>
        )}

        {user.rol === "supervisor" && (
          <li>
            <Link to="/revision-reportes">Revisión Reportes</Link>
          </li>
        )}

        {user.rol === "admin" && (
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
        )}

      </ul>

    </div>

  )

}

export default Sidebar;