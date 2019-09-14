import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import ScoresList from "./ScoresList";
import NewScoreForm from "./NewScoreForm";
import { ScoresProvider } from "../contexts/ScoresContext";
import ScoresTable from "./ScoresTable"

function HandicapApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">GOLF HANDICAP CALCULATOR</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={5}>
          <ScoresProvider>
            <NewScoreForm />
            <ScoresList />
          </ScoresProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HandicapApp;
