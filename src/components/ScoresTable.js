import React, { useContext } from "react";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { ScoresContext } from "../contexts/ScoresContext";
import ScoresCell from "./ScoresCell";

export default function ScoresList() {
  const scores = useContext(ScoresContext);
  if (scores.length)
    return (
      <Paper>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Course Rating</TableCell>
            <TableCell align="right">Course Slope</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((score, i) => {
            return (
              <React.Fragment key={i}>
                <ScoresCell {...score} key={score.id} />
              </React.Fragment>
            );
          })}
        </TableBody>
        </Table>
      </Paper>
    );
  return null;
}

