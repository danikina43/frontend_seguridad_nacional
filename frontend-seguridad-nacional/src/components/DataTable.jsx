function DataTable({ columns, data }){

  return(

    <table className="table">

      <thead>

        <tr>

          {columns.map((col)=>(
            <th key={col}>{col}</th>
          ))}

        </tr>

      </thead>

      <tbody>

        {data.map((row,i)=>(
          <tr key={i}>

            {Object.values(row).map((value,index)=>(
              <td key={index}>{value}</td>
            ))}

          </tr>
        ))}

      </tbody>

    </table>

  )

}

export default DataTable;