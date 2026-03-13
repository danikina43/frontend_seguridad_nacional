function Navbar({ onLogout }) {
  return (
    <div style={{
      background: "#0a3d62",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>Sistema de Reportes</h2>

      <button
        onClick={onLogout}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Navbar;