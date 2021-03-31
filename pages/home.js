import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Button,
  Container,
  Divider,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Modal from "../components/posts/Modal";
import Story from "../components/stories/Story";
import Bio from "../components/profile/Bio";
import Info from "../components/profile/Info";
import Header from "../components/header/Header";
import Feed from "../components/feed/Feed";
import StoryFeed from "../components/stories/storyFeed/StoryFeed";

const stories = [
  {
    storyTitle: "портфолио",
    storyPicture: "/../../assets/stories/story_01.png",
    link: "/",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyTitle: "видео",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyTitle: "логотипы",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyTitle: "info",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyTitle: "...",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#fafafa",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    minWidth: "60%",
    maxWidth: "60%",
  },

  storiesBar: {
    flex: 1,
    minWidth: "100%",
    minHeight: 120,
    marginTop: 40,
    marginBottom: 40,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  divider: {
    minWidth: "100%",
    height: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  const refPlayer = useRef([]);

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth={false} disableGutters className={classes.container}>
        <Info />
        {/*  <div className={classes.storiesBar}>
          {stories.map((i, index) => {
            return (
              <Story
                key={index}
                refPlayer={refPlayer}
                index={index}
                storyTitle={i.storyTitle}
                storyPicture={i.storyPicture}
                stories={i.stories}
                link={i.link}
              />
            );
          })}
        </div> */}
        <StoryFeed />
        <Divider className={classes.divider} variant="fullWidth" />
        <Feed />
      </Container>
    </div>
  );
}
