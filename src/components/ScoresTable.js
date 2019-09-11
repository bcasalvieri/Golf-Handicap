import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

export default function ScoresTable(props) {
  return (
    <Paper style={{ marginTop: "25px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Course Rating</TableCell>
            <TableCell align="right">Course Slope</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.scores.map(score => (
            <TableRow>
              <TableCell component="th" scope="row">
                {score.course}
              </TableCell>
              <TableCell align="right">{score.score}</TableCell>
              <TableCell align="right">{score.rating}</TableCell>
              <TableCell align="right">{score.slope}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
