function Guardas(){

  const guardas = [
    {id:1, nombre:"Carlos Lopez", puesto:"Portería"},
    {id:2, nombre:"Luis Perez", puesto:"Parqueadero"}
  ]

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Guardas</h2>

      <table style={{
        width:"100%",
        background:"#1e293b"
      }}>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puesto</th>
          </tr>

        </thead>

        <tbody>

          {guardas.map((g)=>(
            <tr key={g.id}>

              <td>{g.id}</td>
              <td>{g.nombre}</td>
              <td>{g.puesto}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Guardas;