import React from "react";
import { Grid, Container } from "@material-ui/core";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import FormDialog from "./components/FormDialog";
import ScoresTable from "./components/ScoresTable";

function App() {
  return (
    <>
      <Header />
      <Grid direction="column" align="center" >
        <Container maxWidth="sm">
          <MainContent />
        </Container>
      </Grid>
    </>
  );
}

export default App;
