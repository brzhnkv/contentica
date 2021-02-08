import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const Post_05 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*    <AwesomeSlider cssModule={styles}>
        <div data-src="/assets/posts/post_01/post_picture.png" />
        <div data-src="/path/to/image-1.png" />
        <div data-src="/path/to/image-2.jpg" />
      </AwesomeSlider> */}
    </div>
  );
};

export default Post_05;
