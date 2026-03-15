function Usuarios(){

  const usuarios = [
    {id:1, nombre:"Carlos Lopez", rol:"Guarda"},
    {id:2, nombre:"Ana Torres", rol:"Supervisor"},
    {id:3, nombre:"Admin Sistema", rol:"Administrador"}
  ]

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Gestión de Usuarios</h2>

      <table style={{
        width:"100%",
        background:"#1e293b"
      }}>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {usuarios.map((u)=>(
            <tr key={u.id}>

              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.rol}</td>

              <td>

                <button style={{marginRight:"5px"}}>
                  Editar
                </button>

                <button>
                  Eliminar
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Usuarios;