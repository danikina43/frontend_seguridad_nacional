import logo from "../assets/logo_panel.png"
import GlobalSearch from "./GlobalSearch"

function Navbar({ user, onLogout }){

  return(

    <div className="navbar">

      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>

        <img
          src={logo}
          alt="Logo"
          style={{width:"40px"}}
        />

        <h3>Sistema de Seguridad</h3>

      </div>

      <GlobalSearch/>

      <div>

        <span style={{marginRight:"15px"}}>
          {user?.nombre} - {user?.rol}
        </span>

        <button className="btn-warning" onClick={onLogout}>
          Cerrar sesión
        </button>

      </div>

    </div>

  )

}

export default Navbar;