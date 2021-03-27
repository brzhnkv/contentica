import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import dynamic from "next/dynamic";
const Story = dynamic(() => import("react-insta-stories"), {
  ssr: false,
});

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
    flexDirection: "row",

    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "95%",

    backgroundColor: "white",
  },
  story: {
    margingLeft: 20,
    marginRight: 20,
    paddingRight: 200,
  },
}));

const StoryFeedContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {stories.map((s, index) => {
        return (
          <Story
            storyStyles={{ width: 10 }}
            key={index}
            stories={s.stories}
            loop
            height={"100%"}
            width={400}
          />
        );
      })}
    </div>
  );
};

export default StoryFeedContent;
