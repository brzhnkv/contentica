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
    position: "relative",
  },
  storyPicture: {
    position: "absolute",
    width: 56,
    height: 56,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  storyTitle: {
    color: "black",
    fontFamily: "FM Bolyar Sans Pro",
    fontWeight: 400,
    fontSize: 12,
    /*  fontSmooth: "never",
    webkitFontSmoothing: "none", */

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
      <div className={classes.player}>
        <Player
          ref={(ref) => refPlayer.current.splice(index, 0, ref)}
          autoplay
          src="/assets/lottie/gradient-loading-bar.json" /* https://assets3.lottiefiles.com/packages/lf20_9OjdGh.json */
          style={{
            width: 66,
            height: 66,
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {" "}
          <Link href={link}>
            <Avatar
              className={classes.storyPicture}
              src={storyPicture}
              onMouseEnter={() => {
                animateStory(index);
              }}
            ></Avatar>
          </Link>
        </Player>
      </div>
      <Typography className={classes.storyTitle}>{storyTitle}</Typography>
    </div>
  );
};

export default Story;
