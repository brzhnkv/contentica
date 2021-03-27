import React, { useRef } from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import Instagram from "./Instagram";
import Story from "../stories/Story";

const stories = [
  {
    storyTitle: "мы",
    storyPicture: "/../../assets/stories/story_01.png",
    link: "/",
  },
  {
    storyTitle: "портфолио",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/portfolio",
  },
  {
    storyTitle: "услуги",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
  },
  {
    storyTitle: "что-то еще",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
  },
  {
    storyTitle: "...",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  container: {
    minWidth: "60%",
    maxWidth: "60%",
  },
  storiesBar: {
    height: 100,
  },
  storiesWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  graySpace: {
    width: "100vw",
    height: 25,
    backgroundColor: "#fafafa",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const refPlayer = useRef([]);

  return (
    <AppBar position="sticky" className={classes.root} elevation={0}>
      <Instagram />
      <Container maxWidth={false} disableGutters className={classes.container}>
        <Toolbar className={classes.storiesBar}>
          <Box className={classes.storiesWrapper}>
            {stories.map((i, index) => {
              return (
                <Story
                  key={index}
                  refPlayer={refPlayer}
                  index={index}
                  storyTitle={i.storyTitle}
                  storyPicture={i.storyPicture}
                  link={i.link}
                />
              );
            })}
          </Box>
        </Toolbar>
      </Container>
      <div className={classes.graySpace}></div>
    </AppBar>
  );
};

export default Header;
