import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import StoryToolbar from "./StoryToolbar";
import StoryFeedContent from "./StoryFeedContent";
import Story from "../Story";

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
    display: "flex",
    alignSelf: "flex-start",
  },
  dialog: {
    backgroundColor: "#1a1a1a",
  },

  story: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  storyPicture: {
    width: 56,
    height: 56,

    "&:hover": {
      cursor: "pointer",
    },
  },
  storyTitle: {
    color: "black",

    /*  fontSmooth: "never",
    webkitFontSmoothing: "none", */

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StoryFeed() {
  const [selected, setSelected] = React.useState(null);

  const handleSelect = (id) => {
    setSelected(id);
    setOpen(true);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {stories.map((i, index) => {
        return (
          <div key={index} className={classes.story}>
            <img
              className={classes.storyPicture}
              src={i.storyPicture}
              onClick={() => handleSelect(index)}
            />
            <Typography className={classes.storyTitle} variant="caption">
              {i.storyTitle}
            </Typography>
          </div>
        );
      })}

      <Dialog
        classes={{ paper: classes.dialog }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <StoryToolbar handleClose={handleClose} />
        <StoryFeedContent selected={selected} setSelected={setSelected} />
      </Dialog>
    </div>
  );
}
