import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DVDLogo from "./utils/DVDLogo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    overflow: "hidden",
    height: 500,
  },
}));

const Post_06 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DVDLogo />
    </div>
  );
};

export default Post_06;
