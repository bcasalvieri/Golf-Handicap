import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

export default function ScoresTable(props) {
  const primary = green[500];

  return (
    <Paper style={{ marginTop: "25px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Course Rating</TableCell>
            <TableCell align="right">Course Slope</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.scores.map(score => (
            <TableRow id={score.id}>
              <TableCell component="th" scope="row">
                {score.course}
              </TableCell>
              <TableCell align="right">{score.score}</TableCell>
              <TableCell align="right">{score.rating}</TableCell>
              <TableCell align="right">{score.slope}</TableCell>
              <TableCell align="right">
                <IconButton style={{color: primary}} aria-label="edit">
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton color="secondary" aria-label="delete">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
