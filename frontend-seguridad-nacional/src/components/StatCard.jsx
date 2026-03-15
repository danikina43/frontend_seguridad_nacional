function StatCard({ title, value, color }) {

  return (

    <div
      style={{
        background:"#1e293b",
        padding:"20px",
        borderRadius:"12px",
        width:"220px",
        color:"white"
      }}
    >

      <p style={{color:"#94a3b8"}}>
        {title}
      </p>

      <h2 style={{color:color}}>
        {value}
      </h2>

    </div>

  )

}

export default StatCard