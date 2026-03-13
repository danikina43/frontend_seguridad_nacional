import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div>

      <h3>Menú</h3>

      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/crear-reporte">Crear Reporte</Link>
        </li>

      </ul>

    </div>
  );

}

export default Sidebar;