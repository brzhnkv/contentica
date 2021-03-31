import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Story from "./Story";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

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

const storyData = [
  {
    storyID: 0,
    storyPreview: "/assets/stories/story0.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 1,
    storyPreview: "/assets/stories/story1.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 2,
    storyPreview: "/assets/stories/story2.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 3,
    storyPreview: "/assets/stories/story3.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 4,
    storyPreview: "/assets/stories/story4.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 5,
    storyPreview: "/assets/stories/story5.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 6,
    storyPreview: "/assets/stories/story6.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 7,
    storyPreview: "/assets/stories/story7.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 8,
    storyPreview: "/assets/stories/story8.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 9,
    storyPreview: "/assets/stories/story9.jpg",
    stories: [
      "/assets/stories/story1.jpg",
      "/assets/stories/story2.jpg",
      "/assets/stories/story3.jpg",
    ],
  },
  {
    storyID: 10,
    storyPreview: "/assets/stories/story10.jpg",
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

    flexDirection: "row",
    alignItems: "center",
    justifyItems: "space-between",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "95%",
    overflow: "hidden",
  },
  img: {
    alignSelf: "center",
    display: "block",
    maxHeight: "40%",
    width: "auto",
    height: "auto",
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    cursor: "pointer",
  },
  prevStories: {
    display: "flex",
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: "flex-end",
    height: "100%",
    width: "auto",
    marginRight: "auto",
    overflow: "hidden",
    transition: "transform 0.5s ease-in",
  },
  activeStory: {
    display: "flex",
    justifyContent: "center",
    //margin: "auto",
    position: "relative",
    height: "100%",
    width: "auto",
    border: "45px solid #1a1a1a",

    "&:hover": {
      "& .button": {
        opacity: 0.8,
      },
    },
  },
  nextStories: {
    display: "flex",
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: "flex-start",
    height: "100%",
    width: "auto",
    overflow: "hidden",
    marginLeft: "auto",
  },
  imgSelected: {
    display: "block",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    borderRadius: 10,
  },

  button: {
    width: 30,
    height: 30,
    position: "absolute",
    top: "50%",
    borderRadius: "50%",
    backgroundColor: "white",
    opacity: 0.3,
    transition: "0.3s",
    cursor: "pointer",
    zIndex: 100,
  },
  btnDirection: ({ direction }) =>
    direction === "left"
      ? {
          left: -15,
          transform: "translate(-100%, -50%)",
        }
      : {
          right: -15,
          transform: "translate(100%, -50%)",
        },
  icon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: 30,
    width: 30,
    fill: "#1a1a1a",
  },
}));

const StoryFeedContent = ({ selected, setSelected }) => {
  const handleClickPrev = () => {
    setSelected((prev) => prev - 1);
  };
  const handleClickNext = () => {
    setSelected((prev) => prev + 1);
  };

  const classes = useStyles();

  const isFirst = selected === 0;
  const isLast = selected === storyData.length - 1;

  const lastElement = storyData.length - 1;
  const prevStories = storyData.slice(0, selected);
  const activeStory = storyData.slice(selected, selected + 1);
  const nextStories = storyData.slice(selected + 1, storyData.length + 1);

  return (
    <div className={classes.root}>
      <div className={classes.prevStories}>
        {prevStories.map((s, index) => {
          return (
            <img
              key={index}
              className={classes.img}
              src={s.storyPreview}
              onClick={() => setSelected(s.storyID)}
            />
          );
        })}
      </div>
      {activeStory.map((s, index) => {
        return (
          <div className={classes.activeStory}>
            {!isFirst && (
              <Button
                direction={"left"}
                handleClick={handleClickPrev}
                Icon={ChevronLeftOutlinedIcon}
              />
            )}

            <img className={classes.imgSelected} src={s.storyPreview} />
            {!isLast && (
              <Button
                direction={"right"}
                handleClick={handleClickNext}
                Icon={ChevronRightOutlinedIcon}
              />
            )}
          </div>
        );
      })}
      <div className={classes.nextStories}>
        {nextStories.map((s, index) => {
          return (
            <img
              key={index}
              className={classes.img}
              src={s.storyPreview}
              onClick={() => setSelected(s.storyID)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StoryFeedContent;

const Button = ({ direction, handleClick, Icon }) => {
  const classes = useStyles({ direction });
  return (
    <div
      className={clsx("button", classes.button, classes.btnDirection)}
      onClick={handleClick}
    >
      <Icon className={classes.icon} />
    </div>
  );
};
