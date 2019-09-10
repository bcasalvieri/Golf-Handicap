import React from "react";
import { Grid, Container } from "@material-ui/core";
import Header from "./components/Header";
import FormDialog from "./components/FormDialog";
import ScoresTable from "./components/ScoresTable";

function App() {
  return (
    <>
      <Header />
      <Grid direction="column" align="center" >
        <Container maxWidth="sm">
          <FormDialog />
          <ScoresTable />
        </Container>
      </Grid>
    </>
  );
}

export default App;
