import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const marqueeElementWidth = 33.333;
const duration = "5s";
const black = "rgb(10,8,11)";

const useStyles = makeStyles((theme) => ({
  root: { minWidth: "400px", height: 500, position: "relative" },

  player: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
  },
  image: {
    width: 200,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const Marquee2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_9OjdGh.json"
        style={{
          width: 220,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Player>
      <img className={classes.image} src="/assets/logo.png" />
    </div>
  );
};

export default Marquee2;
