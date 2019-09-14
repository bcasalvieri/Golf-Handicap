import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { NoteAddOutlined } from "@material-ui/icons";
// import useInputState from "../hooks/useInputState";
// import Form from "./Form";
import useForm from "../hooks/useForm";

export default function FormDialog(props) {
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

  function toggleDialog() {
    setFormState({ open: !open });
  }

  function handleFormSubmit() {
    props.addScore(course, score, rating, slope);
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
          <form>
            <TextField
              label="Course"
              name="course"
              value={course}
              onChange={onChange}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              label="Score"
              name="score"
              value={score}
              onChange={onChange}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              label="Rating"
              name="rating"
              value={rating}
              onChange={onChange}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              label="Slope"
              name="slope"
              value={slope}
              onChange={onChange}
              margin="normal"
              fullWidth
            />
          </form>
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
