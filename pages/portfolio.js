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
import Story from "../components/stories/Story";

const stories = [
  {
    storyTitle: "info",
    storyPicture: "/../../assets/stories/story_01.png",
    link: "/",
  },
  {
    storyTitle: "info",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/portfolio",
  },
  {
    storyTitle: "info",
    storyPicture: "/../../assets/stories/story_02.jpg",
    link: "/",
  },
  {
    storyTitle: "info",
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
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#fafafa",
  },
  appBar: {
    width: "100vw",
    height: 55,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",

    "& .container": {
      display: "flex",

      minWidth: "60%",
      maxWidth: "60%",
    },
  },
  logoInstagram: {
    marginLeft: "20px",
    paddingTop: 4,
    color: "#232323",
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
  bio: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
    height: 180,
    "& .imageWrapper": {
      width: "30%",
      textAlign: "center",
      flex: 1,
    },
    "& .image": {
      width: 150,
      height: 150,
      border: "solid 1px #ebebeb",
      borderRadius: "50%",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "& .bio": {
      minHeight: "100%",
      marginLeft: 20,
      display: "flex",
      flex: "2",
      flexDirection: "column",

      justifyContent: "space-between",
      alignItems: "flex-start",
      "& div": {
        flex: 1,
        display: "flex",
        minWidth: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      "& .top": {
        "& .title": {
          fontSize: "1.5rem",
          fontWeight: "300",
          marginRight: 15,
        },
        "& Button": {
          marginRight: 10,
        },
      },
      "& .middle": {
        "& Button": {
          marginRight: 30,
        },
      },
      "& .bottom": {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
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
  grid: {
    display: "flex",
    minWidth: "100%",
    flexDirection: "column",
    marginTop: 20,

    /*   justifyContent: "space-between", */

    "& .col": {
      flex: 1,
      display: "flex",
      marginBottom: 15,

      minWidth: "100%",
      justifyContent: "space-between",

      "& img": {
        flex: 1,
        maxWidth: "32%",
      },
    },
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  const refPlayer = useRef([]);

  return (
    <div className={classes.root}>
      <AppBar position={"sticky"} elevation={1} className={classes.appBar}>
        <Container maxWidth={false} disableGutters className={"container"}>
          <img
            className={classes.logoInstagram}
            src="/assets/logo_instagram.png"
          />
        </Container>
      </AppBar>
      <Container maxWidth={false} disableGutters className={classes.container}>
        <div className={classes.bio}>
          <div className={"imageWrapper"}>
            <Link href="/">
              <img
                className={"image"}
                src="/assets/posts/post_01/post_picture.png"
              />
            </Link>
          </div>
          <div className={"bio"}>
            <div className="top">
              <Typography className="title">портфолио</Typography>
              <Button variant="outlined">Оставить заявку</Button>
              <Button variant="outlined">кнопка</Button>
              <Button variant="outlined">кнопка2</Button>
            </div>
            <div className="middle">
              <Button>6 проектов</Button>
              <Button>120 чего-то</Button>
              <Button>360 чего-то еще</Button>
            </div>
            <div className="bottom">
              <div>Digital Agency</div>
              <div>
                Content creation | Graphic design | Motion video | SMM |
                Business consulting | Digital | Target
              </div>
              <div>Визуал продюсирование бренда</div>
            </div>
          </div>
        </div>
        <div className={classes.storiesBar}>
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
        </div>
        <Divider className={classes.divider} variant="fullWidth" />
        <div className={classes.grid}>
          <div className="col">
            <img src="/assets/300x300.png" />
            <img src="/assets/300x300.png" />
            <img src="/assets/300x300.png" />
          </div>
          <div className="col">
            <img src="/assets/300x300.png" />
            <img src="/assets/300x300.png" />
            <img src="/assets/300x300.png" />
          </div>
          <div className="col">
            <img src="/assets/300x300.png" />
            <img src="/assets/300x300.png" />
            <img src="/assets/300x300.png" />
          </div>
        </div>
      </Container>
    </div>
  );
}
