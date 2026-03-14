function StatCard({ title, value, color }) {

  return (

    <div style={{
      background:"#1e293b",
      padding:"20px",
      borderRadius:"12px",
      width:"250px",
      color:"white",
      display:"flex",
      flexDirection:"column",
      gap:"5px"
    }}>

      <span style={{color:"#94a3b8"}}>
        {title}
      </span>

      <h2 style={{color:color}}>
        {value}
      </h2>

    </div>

  )

}

export default StatCard;