import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import makeStyles from "@material-ui/core/styles/makeStyles";

import dynamic from "next/dynamic";
const Story = dynamic(() => import("react-insta-stories"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "100vh",
    maxHeight: "100vh",

    backgroundColor: "black",
  },
}));

const Stories = ({ stories, open, setOpen }) => {
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      // classes={{ paper: classes.dialogPaper }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Story stories={stories} loop />
    </Dialog>
  );
};

export default Stories;
