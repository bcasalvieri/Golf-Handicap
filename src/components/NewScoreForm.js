import React, { useContext } from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import useForm from "../hooks/useForm";
import { DispatchContext } from "../contexts/ScoresContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30.6%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default function NewScoreForm() {
  const classes = useStyles();
  const [{ course, score, rating, slope }, setFormState, onChange] = useForm({
    course: "",
    score: "",
    rating: "",
    slope: ""
  });
  const dispatch = useContext(DispatchContext);
  const handleFormSubmit = () => {
    dispatch({ type: "ADD", course, score, slope, rating });
    setFormState({
      course: "",
      score: "",
      rating: "",
      slope: ""
    });
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form className={classes.container}>
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
          className={classes.textField}
        />
        <TextField
          required
          label="Rating"
          name="rating"
          value={rating}
          onChange={onChange}
          margin="normal"
          className={classes.textField}
        />
        <TextField
          required
          label="Slope"
          name="slope"
          value={slope}
          onChange={onChange}
          margin="normal"
          className={classes.textField}
        />
      </form>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit Round
      </Button>
    </Paper>
  );
}
