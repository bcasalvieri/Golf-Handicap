import React, { useContext, memo } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "../hooks/useToggleState";
import EditScoreForm from "./EditScoreForm";
import { DispatchContext } from "../contexts/ScoresContext";

function Score({ id, course, score, rating, slope }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState();
  return (
    <ListItem>
      {isEditing ? (
        <EditScoreForm
          id={id}
          course={course}
          score={score}
          rating={rating}
          slope={slope}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <ListItemText>
            {course}  {score}  {rating}  {slope}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Score);
