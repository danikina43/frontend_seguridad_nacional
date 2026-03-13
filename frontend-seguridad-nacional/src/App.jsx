import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";

function App(){

  const [isLogged, setIsLogged] = useState(false);

  return(
    <div>

      {!isLogged ? (
        <Login onLogin={()=>setIsLogged(true)} />
      ) : (
        <Layout onLogout={()=>setIsLogged(false)}>
          <Dashboard/>
        </Layout>
      )}

    </div>
  );
}

export default App;