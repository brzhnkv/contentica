import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  compareBlock: {
    width: "30%",
    marginTop: 20,
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    "& Button": {
      width: "100%",
      height: 50,
    },
  },
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh",
  },
}));

export default function Modal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={classes.compareBlock}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Сравнить все пакеты
        </Button>
      </div>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        fullWidth
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        className={classes.dialog}
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
