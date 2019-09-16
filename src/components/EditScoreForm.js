import React from "react";
import { TextField } from "@material-ui/core";

export default function EditScoreForm({ newCourse, newScore, newRating, newSlope, onChange }) {
  return (
    <form>
      <TextField
        label="Course"
        name="newCourse"
        value={newCourse}
        onChange={onChange}
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Score"
        name="newScore"
        value={newScore}
        onChange={onChange}
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Rating"
        name="newRating"
        value={newRating}
        onChange={onChange}
        margin="normal"
        fullWidth
      />
      <TextField
        required
        label="Slope"
        name="newSlope"
        value={newSlope}
        onChange={onChange}
        margin="normal"
        fullWidth
      />
    </form>
  );
}
