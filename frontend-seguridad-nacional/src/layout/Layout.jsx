import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

function Layout({children, user, onLogout}){

  return(

    <div style={{display:"flex"}}>

      <Sidebar/>

      <div style={{flex:1}}>

        <Navbar user={user} onLogout={onLogout}/>

        <div style={{padding:"20px"}}>

          {children}

        </div>

      </div>

    </div>

  )

}

export default Layout;