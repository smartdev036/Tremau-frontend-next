import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

const CaseTable = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://retoolapi.dev/zTMlcq/tremau-data"
        );
        setCases(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const updatedCases = cases.filter((caseItem) => caseItem.id !== id);
    setCases(updatedCases);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "reportedUrl", headerName: "Reported URL", width: 200 },
    { field: "reporterAge", headerName: "Reporter Age", width: 130 },
    { field: "reporterName", headerName: "Reporter Name", width: 200 },
    { field: "reporterEmail", headerName: "Reporter Email", width: 250 },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row.id)} style={{ color: "red" }}>
          Delete
        </button>
      ),
    },
  ];

  return (
    <Box style={{ height: "100%", width: "100%" }}>
      <Box style={{ height: "540px", width: "100%" }}>
        <DataGrid rows={cases} columns={columns} pageSize={10} />
      </Box>
    </Box>
  );
};

export default CaseTable;
