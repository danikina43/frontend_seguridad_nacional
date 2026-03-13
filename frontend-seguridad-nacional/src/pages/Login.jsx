import { useState } from "react";

function Login({ onLogin }) {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(usuario && password && rol){
      onLogin({
        nombre: usuario,
        rol: rol
      });
    }else{
      alert("Complete todos los campos");
    }
  };

  return (

    <div style={{padding:"40px"}}>

      <h2>Inicio de sesión</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e)=>setUsuario(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <label>Rol</label>

        <select
          value={rol}
          onChange={(e)=>setRol(e.target.value)}
        >
          <option value="">Seleccione</option>
          <option value="admin">Administrador</option>
          <option value="supervisor">Supervisor</option>
          <option value="guardia">Guardia</option>
        </select>

        <br/><br/>

        <button type="submit">
          Ingresar
        </button>

      </form>

    </div>

  );

}

export default Login;