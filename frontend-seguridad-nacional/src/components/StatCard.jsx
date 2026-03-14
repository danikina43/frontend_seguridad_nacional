function StatCard({ titulo, valor }){

  return(

    <div style={{
      background:"#1e293b",
      padding:"20px",
      borderRadius:"10px",
      color:"white",
      width:"200px"
    }}>

      <h4>{titulo}</h4>

      <h2>{valor}</h2>

    </div>

  )

}

export default StatCard;