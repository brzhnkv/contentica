import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    position: "relative",
    dispay: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 100,
  },
  logo: {
    width: 120,
    cursor: "pointer",
  },
  icon: {
    fill: "white",
    width: 40,
    height: 40,
  },
}));

const StoryToolbar = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <img
        className={classes.logo}
        src="/assets/logo.png"
        onClick={handleClose}
      />

      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
      >
        <CloseIcon classes={{ root: classes.icon }} />
      </IconButton>
    </Toolbar>
  );
};

export default StoryToolbar;
