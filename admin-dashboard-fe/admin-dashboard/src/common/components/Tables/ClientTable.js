import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "phoneNo",
    headerName: "Phone no",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    editable: true,
    width: 250,
  },
  {
    field: "createdAt",
    headerName: "Joined Date",
    editable: true,
    width: 110,
  },
];

const ClientTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = "http://localhost:3001/api/getAdminClient/client";
      const { data } = await axios.get(url, config);

      setTableData(data.data);
      console.log(data.data);
    } catch (error) {}
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tableData}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default ClientTable;
