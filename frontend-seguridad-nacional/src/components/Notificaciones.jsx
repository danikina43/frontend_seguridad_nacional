function Notifications(){

  const notificaciones = [
    "Nuevo reporte creado",
    "Supervisor revisó un reporte",
    "Vehículo registrado",
    "Nuevo usuario agregado"
  ]

  return(

    <div className="card">

      <h3>Notificaciones</h3>

      <ul>

        {notificaciones.map((n,i)=>(
          <li key={i}>{n}</li>
        ))}

      </ul>

    </div>

  )

}

export default Notifications;