import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout({ children, onLogout, user }) {

  return (
    <div>

      <Navbar user={user} onLogout={onLogout} />

      <div style={{ display: "flex" }}>

        <Sidebar user={user} />

        <div style={{ padding: "20px", width: "100%" }}>
          {children}
        </div>

      </div>

    </div>
  );

}

export default Layout;