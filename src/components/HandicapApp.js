import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import { ScoresProvider } from "../contexts/ScoresContext";
import ScoresTable from "./ScoresTable";
import NewScoreDialog from "./NewScoreDialog";
import Handicap from "./Handicap";

function HandicapApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        minHeight: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit"><span role="img" aria-label="golf-flag">⛳️</span> GOLF HANDICAP CALCULATOR</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={5} display="flex" flexdirection="column" justifycontent="center" align="center">
          <ScoresProvider>
            <NewScoreDialog />
            <Handicap />
            <ScoresTable />
          </ScoresProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HandicapApp;
