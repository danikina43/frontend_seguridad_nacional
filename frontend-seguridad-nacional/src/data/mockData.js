export const statusReporte = [
  { id: 1, nombre: "Creado" },
  { id: 2, nombre: "Recibido" },
  { id: 3, nombre: "Devuelto" }
]

export const tiposReporte = [
  { id: 1, nombre: "Ingreso de personal" },
  { id: 2, nombre: "Ingreso de vehículo" },
  { id: 3, nombre: "Incidente" },
  { id: 4, nombre: "Novedad" }
]

export const reportes = [
  {
    id: 1,
    fecha: "2026-03-13",
    descripcion: "Ingreso técnico mantenimiento",
    tipo: "Ingreso de personal",
    status_reporte_id_status_reporte: 1
  },
  {
    id: 2,
    fecha: "2026-03-13",
    descripcion: "Ingreso vehículo proveedor",
    tipo: "Ingreso de vehículo",
    status_reporte_id_status_reporte: 2
  },
  {
    id: 3,
    fecha: "2026-03-13",
    descripcion: "Novedad portería principal",
    tipo: "Novedad",
    status_reporte_id_status_reporte: 1
  }
]

export const guardas = [
  { id: 1, nombre: "Carlos López" },
  { id: 2, nombre: "Juan Pérez" }
]

export const alertas = [
  { id: 1, mensaje: "Reporte pendiente de revisión" },
  { id: 2, mensaje: "Nuevo reporte creado" }
]