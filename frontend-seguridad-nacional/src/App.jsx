import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Reportes from "./pages/Reportes"
import Layout from "./layout/Layout"
import CrearReporte from "./pages/CrearReporte"
import DetalleReporte from "./pages/DetalleReporte"
import Alertas from "./pages/Alertas"
import Usuarios from "./pages/Usuarios"
import Guardas from "./pages/Guardas"
import Supervisores from "./pages/Supervisores"
import Vehiculos from "./pages/Vehiculos"
import Personas from "./pages/Personas"
import Conductores from "./pages/Conductores" 

function App() {

  const [user, setUser] = useState(null)

  if (!user) {
    return <Login onLogin={setUser} />
  }

  return (

    <Layout user={user} onLogout={() => setUser(null)}>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/reportes" element={<Reportes user={user} />} />

        <Route path="/crear-reporte" element={<CrearReporte />} />

        <Route path="/reportes/:id" element={<DetalleReporte />} />
        
        <Route path="/alertas" element={<Alertas />} />

        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/guardas" element={<Guardas />} />

        <Route path="/supervisores" element={<Supervisores />} />

        <Route path="/vehiculos" element={<Vehiculos />} />

        <Route path="/personas" element={<Personas />} />

        <Route path="/conductores" element={<Conductores />} />

      </Routes>

    </Layout>

  )

}

export default App;