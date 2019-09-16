import React, { useContext, memo } from "react";
import { TableRow, IconButton, TableCell } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "../hooks/useToggleState";
import EditScoreDialog from "./EditScoreDialog";
import { DispatchContext } from "../contexts/ScoresContext";

function Score({ id, course, score, rating, slope }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState();
  return (
    <TableRow id={id} key={id}>
      {isEditing ? (
        <EditScoreDialog
          id={id}
          course={course}
          score={score}
          rating={rating}
          slope={slope}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <TableCell component="th" scope="row">
            {course}
          </TableCell>
          <TableCell align="right">{score}</TableCell>
          <TableCell align="right">{rating}</TableCell>
          <TableCell align="right">{slope}</TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="edit"
              onClick={toggleIsEditing}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}

export default memo(Score);
