import React from "react";
import Container from "@mui/material/Container";
import CaseTable from "../components/CaseTable";
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <CaseTable />
      </Box>
    </Container>
  );
};

export default Home;
