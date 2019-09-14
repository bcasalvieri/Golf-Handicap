import React, { useContext } from "react";
import { Paper, List, Divider } from "@material-ui/core";
import Score from "./Score";
import { ScoresContext } from "../contexts/ScoresContext";

export default function ScoresList() {
  const scores = useContext(ScoresContext);
  if (scores.length)
    return (
      <Paper>
        <List>
          {scores.map((score, i) => {
            return (
              <React.Fragment key={i}>
                <Score {...score} key={score.id} />
                {i < scores.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    );
  return null;
}
