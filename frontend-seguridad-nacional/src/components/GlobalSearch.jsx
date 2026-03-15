import { useState } from "react"

function GlobalSearch(){

  const [busqueda,setBusqueda] = useState("")

  return(

    <input
      type="text"
      placeholder="Buscar en el sistema..."
      value={busqueda}
      onChange={(e)=>setBusqueda(e.target.value)}
      style={{
        padding:"6px",
        borderRadius:"6px",
        border:"none"
      }}
    />

  )

}

export default GlobalSearch;