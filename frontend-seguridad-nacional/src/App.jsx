import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CrearReporte from "./pages/CrearReporte";

import Layout from "./layout/Layout";

function App(){

  const [isLogged, setIsLogged] = useState(false);

  if(!isLogged){
    return <Login onLogin={()=>setIsLogged(true)} />
  }

  return (

    <Layout onLogout={()=>setIsLogged(false)}>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/crear-reporte" element={<CrearReporte />} />

      </Routes>

    </Layout>

  )

}

export default App;