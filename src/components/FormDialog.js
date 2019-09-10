import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Form from "./Form";

export default function FormDialog() {
  const primary = green[500];
  const styles = {
    button: {
      backgroundColor: primary,
      color: "white",
      border: "none"
    }
  }

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" style={styles.button} onClick={handleClickOpen}>
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
            Enter the course name, your score, the course rating, and the course slope for your latest round!
          </DialogContentText>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} style={{color: primary}}>
            Submit Round
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
