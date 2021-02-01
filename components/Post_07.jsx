import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Marquee from "./utils/Marquee";

const useStyles = makeStyles((theme) => ({
  root: { display: "block", overflow: "hidden", height: 500 },
}));

const Post_07 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Marquee text={"con.tentica"} />
    </div>
  );
};

export default Post_07;
