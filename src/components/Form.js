import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";

const Form = () => {
  const [course, handleCourseChange, resetCourse] = useInputState("");
  const [score, handleScoreChange, resetScore] = useInputState("");
  const [rating, handleRatingChange, resetRating] = useInputState("");
  const [slope, handleSlopeChange, resetSlope] = useInputState("");

  return (
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
  );
};

export default Form;
