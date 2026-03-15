function AlertPanel({ alertas }) {

  return (

    <div style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      color: "white"
    }}>

      <h3>Alertas recientes</h3>

      {alertas.length === 0 ? (

        <p style={{ color: "#94a3b8" }}>
          Sin alertas nuevas
        </p>

      ) : (

        alertas.map((a) => (

          <div
            key={a.id}
            style={{
              padding: "8px",
              borderBottom: "1px solid #334155"
            }}
          >
            {a.mensaje}
          </div>

        ))

      )}

    </div>

  )

}

export default AlertPanel;