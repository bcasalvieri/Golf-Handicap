import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import useForm from "../hooks/useForm";
import { DispatchContext } from "../contexts/ScoresContext";
import EditScoreForm from "./EditScoreForm";

export default function EditScoreDialog({
  id,
  course,
  score,
  rating,
  slope,
  toggleIsEditing
}) {
  const dispatch = useContext(DispatchContext);
  const primary = green[500];

  const [
    { newCourse, newScore, newRating, newSlope, open },
    setFormState,
    onChange
  ] = useForm({
    newCourse: course,
    newScore: score,
    newRating: rating,
    newSlope: slope,
    open: true
  });

  const handleFormSubmit = () => {
    if (course === "" || score === "" || rating === "" || slope === "") {
      return false;
    }
    dispatch({
      type: "EDIT",
      id: id,
      newCourse,
      newScore,
      newRating,
      newSlope
    });
    setFormState({
      newCourse: "",
      newScore: "",
      newRating: "",
      newSlope: ""
    });
    toggleIsEditing();
    toggleDialog();
  };

  function toggleDialog() {
    setFormState({ open: !open });
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Round</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the course name, your score, the course rating, and the course
            slope for your latest round!
          </DialogContentText>
          <EditScoreForm
            newCourse={newCourse}
            newScore={newScore}
            newRating={newRating}
            newSlope={newSlope}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} style={{ color: primary }}>
            Update Round
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
