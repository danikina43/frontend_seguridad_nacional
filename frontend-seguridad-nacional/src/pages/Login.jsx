import { useState } from "react"
import logo from "../assets/logo_panel.png"

function Login({ onLogin }){

  const [usuario,setUsuario] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()

    const user = {
      nombre:usuario,
      rol:"admin"
    }

    onLogin(user)
  }

  return(

    <div className="login-container">

      <div className="login-box">
        <img src={logo} alt ="Seguridad Nacional" className = "login-logo" />

        <h2>Sistema Seguridad Nacional</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e)=>setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Iniciar Sesión
          </button>

        </form>

      </div>

    </div>

  )

}

export default Login;