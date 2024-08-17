import { DataGrid } from "@mui/x-data-grid";
import { useParams } from 'react-router-dom';
import React, { useState } from "react";

export default function TableDisplay() {
  
  // get the part of the url after localhost:3000/results/
  const params = useParams();
  const search = params.query;
  
  // get row data from the server using the specified search term
  const [rows, setRows] = useState([]);
  
    async function getData(input) {
      const response = await fetch(`http://localhost:3001/search?name=${input}`, { 
        mode:"cors"
      });
      const data = await response.json();
      setRows(data);
    };

  getData(search)

  // define column headers
  const columns = [
    { field: "vc", headerName: "Name", width: 150 },
    { field: "hash", headerName: "Hash", width: 300 }
  ];

  // render table, using columns and rows as defined above, and the _id key as a unique row identifier (which DataGrid requires)
  return (
    <div className="Container">
      <div className="Grid">
        <DataGrid getRowId={row => row._id} rows={rows} columns={columns}/>
      </div>
    </div>
  );
}
