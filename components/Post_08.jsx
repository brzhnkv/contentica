import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Marquee2 from "./utils/Marquee2";

const useStyles = makeStyles((theme) => ({
  root: { display: "block", overflow: "hidden", height: 500 },
}));

const Post_08 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Marquee2 />
    </div>
  );
};

export default Post_08;
