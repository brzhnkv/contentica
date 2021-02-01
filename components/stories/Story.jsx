import React from "react";
import Link from "next/link";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Avatar, Typography } from "@material-ui/core";
import { Player } from "@lottiefiles/react-lottie-player";

const useStyles = makeStyles((theme) => ({
  story: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    position: "relative",
  },
  player: {
    position: "absolute",
    left: "50%",
    marginLeft: "-20px" /*the half width */,
  },
  storyPicture: {
    flex: 1,

    width: 66,
    height: 66,

    "&:hover": {
      cursor: "pointer",
    },
  },
  storyTitle: {
    color: "black",
    fontWeight: 300,
    fontSize: 15,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Story = ({ refPlayer, index, storyTitle, storyPicture, link }) => {
  const classes = useStyles();

  const animateStory = (index) => {
    refPlayer.current[index].setSeeker(27);
    refPlayer.current[index].play();
  };

  return (
    <div className={classes.story}>
      <Player
        ref={(ref) => refPlayer.current.splice(index, 0, ref)}
        autoplay
        src="/assets/lottie/gradient-loading-bar.json" /* https://assets3.lottiefiles.com/packages/lf20_9OjdGh.json */
        style={{
          width: 72,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: -3,
        }}
      ></Player>
      <Link href={link}>
        <Avatar
          className={classes.storyPicture}
          src={storyPicture}
          onMouseEnter={() => {
            animateStory(index);
          }}
        />
      </Link>

      <Typography className={classes.storyTitle}>{storyTitle}</Typography>
    </div>
  );
};

export default Story;
