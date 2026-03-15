function Supervisores(){

  const supervisores = [
    {id:1, nombre:"Ana Torres"},
    {id:2, nombre:"Pedro Gómez"}
  ]

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Supervisores</h2>

      <table style={{
        width:"100%",
        background:"#1e293b"
      }}>

        <thead>

          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>

        </thead>

        <tbody>

          {supervisores.map((s)=>(
            <tr key={s.id}>

              <td>{s.id}</td>
              <td>{s.nombre}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Supervisores;