function Navbar({ user, onLogout }){

  return(

    <div className="navbar">

      <h3>Sistema de Seguridad</h3>

      <div>

        <span style={{marginRight:"15px"}}>
          {user?.nombre} - {user?.rol}
        </span>

        <button
          className="btn-warning"
          onClick={onLogout}
        >
          Cerrar sesión
        </button>

      </div>

    </div>

  )

}

export default Navbar;