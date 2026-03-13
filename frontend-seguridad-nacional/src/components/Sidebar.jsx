import { Link } from "react-router-dom"

function Sidebar() {

  return (
    <div style={{
      width: "200px",
      background: "#34495e",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>

      <h3>Menú</h3>

      <ul style={{listStyle:"none", padding:"0"}}>

        <li>
          <Link to="/" style={{color:"white"}}>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/reportes" style={{color:"white"}}>
            Reportes
          </Link>
        </li>

        <li>
            <Link to="/crear-reporte" style={{color:"white"}}>
             Crear Reporte
            </Link>
        </li>

      </ul>

    </div>
  )

}

export default Sidebar