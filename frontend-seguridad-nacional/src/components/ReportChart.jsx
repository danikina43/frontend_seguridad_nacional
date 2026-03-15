import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { tipo: "Ingreso personal", cantidad: 4 },
  { tipo: "Ingreso vehículo", cantidad: 3 },
  { tipo: "Incidente", cantidad: 2 },
  { tipo: "Novedad", cantidad: 1 }
]

function ReportChart(){

  return(

    <div style={{
      background:"#1e293b",
      padding:"20px",
      borderRadius:"10px",
      color:"white"
    }}>

      <h3>Reportes por tipo</h3>

      <ResponsiveContainer width="100%" height={250}>

        <BarChart data={data}>

          <XAxis dataKey="tipo" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="cantidad" fill="#2563eb" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  )

}

export default ReportChart;