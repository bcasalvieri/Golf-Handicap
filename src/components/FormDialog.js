import React from "react";
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
import useInputState from "../hooks/useInputState";
// import Form from "./Form";

export default function FormDialog(props) {
  const primary = green[500];
  const styles = {
    button: {
      backgroundColor: primary,
      color: "white",
      border: "none"
    }
  };

  const [course, handleCourseChange, resetCourse] = useInputState("");
  const [score, handleScoreChange, resetScore] = useInputState("");
  const [rating, handleRatingChange, resetRating] = useInputState("");
  const [slope, handleSlopeChange, resetSlope] = useInputState("");

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button
        variant="outlined"
        style={styles.button}
        onClick={handleClickOpen}
      >
        <NoteAddOutlined style={{ marginRight: "10px" }} />
        Add Round
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Round</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the course name, your score, the course rating, and the course
            slope for your latest round!
          </DialogContentText>
          <form
            onSubmit={e => {
              e.preventDefault();
              resetCourse();
              resetScore();
              resetRating();
              resetSlope();
            }}
          >
            <TextField
              label="Course"
              value={course}
              onChange={handleCourseChange}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              label="Score"
              value={score}
              onChange={handleScoreChange}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              label="Rating"
              value={rating}
              onChange={handleRatingChange}
              margin="normal"
              fullWidth
            />
            <TextField
              required
              label="Slope"
              value={slope}
              onChange={handleSlopeChange}
              margin="normal"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => props.addScore(course, score, rating, slope)} style={{ color: primary }}>
            Submit Round
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
