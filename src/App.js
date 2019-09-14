import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import HandicapApp from "./components/HandicapApp"

function App() {
  return (
    <>
      <HandicapApp />
      {/* <Header />
      <Grid container direction="column" align="center" style={{width: "50vw", margin: "0 auto"}}>
        <MainContent />
      </Grid> */}
    </>
  );
}

export default App;
