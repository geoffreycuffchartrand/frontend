import { DataGrid } from "@mui/x-data-grid"

export default function TableDisplay(rows) {
    
    // provide column names to be displayed with each field provided in the row data
    const columns = [
    { field: "credential", headerName: "Credential", width: 150 },
    { field: "verified", headerName: "Verified?", width: 150 }
    ];

    // display table with provided rows and columns
    return (
        <div className="Container">
          <div className="Grid">
            <DataGrid rows={rows} columns={columns}/>
          </div>
        </div>
      );
}
