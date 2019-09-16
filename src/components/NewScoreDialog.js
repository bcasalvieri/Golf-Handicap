import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { NoteAddOutlined } from "@material-ui/icons";
import useForm from "../hooks/useForm";
import { DispatchContext } from "../contexts/ScoresContext";
import NewScoreForm from "./NewScoreForm";

export default function NewScoreDialog() {
  const primary = green[500];
  const styles = {
    button: {
      backgroundColor: primary,
      color: "white",
      border: "none"
    }
  };

  const [
    { course, score, rating, slope, open },
    setFormState,
    onChange
  ] = useForm({
    course: "",
    score: "",
    rating: "",
    slope: "",
    open: false
  });

  const dispatch = useContext(DispatchContext);
  
  function toggleDialog() {
    setFormState({ open: !open });
  }

  function handleFormSubmit() {
    if (course === "" || score === "" || rating === "" || slope === "") {
      return false;
    }
    dispatch({ type: "ADD", course, score, slope, rating });
    setFormState({
      course: "",
      score: "",
      rating: "",
      slope: ""
    });
    toggleDialog();
  }

  return (
    <>
      <Button variant="outlined" style={styles.button} onClick={toggleDialog}>
        <NoteAddOutlined style={{ marginRight: "10px" }} />
        Add Round
      </Button>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Round</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the course name, your score, the course rating, and the course
            slope for your latest round!
          </DialogContentText>
          <NewScoreForm
            course={course}
            score={score}
            rating={rating}
            slope={slope}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} style={{ color: primary }}>
            Submit Round
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
