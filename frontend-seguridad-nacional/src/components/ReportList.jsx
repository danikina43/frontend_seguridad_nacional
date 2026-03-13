function ReportList({ reports }) {
  return (
    <div>
      <h3>Lista de reportes</h3>

      <ul>
        {reports.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReportList;