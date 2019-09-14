import React from "react";
import { Grid, Container } from "@material-ui/core";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <Grid container direction="column" align="center" style={{width: "50vw", margin: "0 auto"}}>
        <MainContent />
      </Grid>
    </>
  );
}

export default App;
