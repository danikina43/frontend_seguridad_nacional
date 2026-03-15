import { alertas } from "../data/mockData"

function Alertas(){

  return(

    <div style={{color:"white", padding:"20px"}}>

      <h2>Alertas del sistema</h2>

      <table style={{
        width:"100%",
        background:"#1e293b",
        borderRadius:"8px"
      }}>

        <thead>
          <tr>
            <th>ID</th>
            <th>Mensaje</th>
          </tr>
        </thead>

        <tbody>

          {alertas.map((a)=>(
            <tr key={a.id}>

              <td>{a.id}</td>
              <td>{a.mensaje}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Alertas;