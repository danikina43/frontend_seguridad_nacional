import { useState } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App(){

  const [isLogged, setIsLogged] = useState(false);

  return(
    <div>

      <Header/>

      {!isLogged ? (
        <Login onLogin={()=>setIsLogged(true)} />
      ) : (
        <Dashboard/>
      )}

    </div>
  );
}

export default App;
