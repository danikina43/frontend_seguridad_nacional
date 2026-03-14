import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";

function App(){

  const [user, setUser] = useState(null);

  if(!user){
    return <Login onLogin={setUser} />
  }

  return(

    <Layout
      user={user}
      onLogout={()=>setUser(null)}
    >

      <Routes>

        <Route path="/" element={<Dashboard user={user}/>} />

      </Routes>

    </Layout>

  )

}

export default App;