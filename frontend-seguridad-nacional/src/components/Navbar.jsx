function Navbar({ user, onLogout }) {

  return (

    <div style={{
      background:"#0a3d62",
      color:"white",
      padding:"15px",
      display:"flex",
      justifyContent:"space-between"
    }}>

      <h2>Sistema de Reportes</h2>

      <div>

        <span style={{marginRight:"20px"}}>
          {user?.nombre} - {user?.rol}
        </span>

        <button
          onClick={onLogout}
          style={{
            background:"red",
            color:"white",
            border:"none",
            padding:"8px"
          }}
        >
          Cerrar sesión
        </button>

      </div>

    </div>

  )

}

export default Navbar;