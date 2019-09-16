import React from "react";
import { TextField } from "@material-ui/core";

export default function Form({ course, score, rating, slope, onChange }) {
  return (
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
  );
}
