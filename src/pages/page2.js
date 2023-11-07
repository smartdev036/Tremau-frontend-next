import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

const Page2 = ({ cases }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "reportedUrl", headerName: "Reported URL", width: 200 },
    { field: "reporterAge", headerName: "Reporter Age", width: 130 },
    { field: "reporterName", headerName: "Reporter Name", width: 200 },
    { field: "reporterEmail", headerName: "Reporter Email", width: 250 },
  ];

  return (

    <Container maxWidth="lg">
      <Box style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Box style={{ height: 500, width: "100%" }}>
          <DataGrid rows={cases} columns={columns} pageSize={10} />
        </Box>
      </Box>
    </Container>

  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://retoolapi.dev/zTMlcq/tremau-data"
    );
    const cases = response.data;
    return {
      props: { cases },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { cases: [] },
    };
  }
}

export default Page2;
