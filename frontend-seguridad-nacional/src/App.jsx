import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Reportes from "./pages/Reportes"
import Layout from "./layout/Layout"

function App(){

  const [isLogged, setIsLogged] = useState(false)

  if(!isLogged){
    return <Login onLogin={()=>setIsLogged(true)} />
  }

  return(

    <Layout onLogout={()=>setIsLogged(false)}>

      <Routes>

        <Route path="/" element={<Dashboard/>} />

        <Route path="/reportes" element={<Reportes/>} />

      </Routes>

    </Layout>

  )

}

export default App