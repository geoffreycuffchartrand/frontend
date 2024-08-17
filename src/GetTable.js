//import { create } from "@mui/material/styles/createTransitions";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";

export default function TableDisplay() {
  const params = useParams();
  const search = params.query; // this gets the part of the url after localhost:3000/results/

  const [rows, setRows] = useState([]);

  // get row data from the server using the specified search term
  // eslint-disable-next-line
  useEffect( () => {
    fetch(`http://localhost:3001/search?name=${search}`, { // send search request to the server
        mode:"cors"
    })
    .then((data) => data.json())
    .then((data) => setRows(data));
  }, []);

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
