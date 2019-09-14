import React, { useContext } from "react";
import { TextField, Button, Box } from "@material-ui/core";
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

function EditTodoForm({ id, course, score, rating, slope, toggleIsEditing }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [
    { newCourse, newScore, newRating, newSlope },
    setFormState,
    onChange
  ] = useForm({
    newCourse: course,
    newScore: score,
    newRating: rating,
    newSlope: slope
  });
  const handleFormSubmit = () => {
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
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <form className={classes.container}>
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
          className={classes.textField}
        />
        <TextField
          required
          label="Rating"
          name="newRating"
          value={newRating}
          onChange={onChange}
          margin="normal"
          className={classes.textField}
        />
        <TextField
          required
          label="Slope"
          name="newSlope"
          value={newSlope}
          onChange={onChange}
          margin="normal"
          className={classes.textField}
        />
      </form>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

export default EditTodoForm;
