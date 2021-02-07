import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { slides, controlsWidth } from "./data";

const useStyles = makeStyles((theme) => ({
  controls: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: controlsWidth,
    marginTop: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 1,
    "&:hover": {
      cursor: "pointer",
    },
  },
  circle: {
    height: 15,
    width: 15,
    backgroundColor: "#F24547",
    borderRadius: "50%",
  },
  activeCircle: {
    height: 15,
    width: 15,
    backgroundColor: "#5f5f5f",
    borderRadius: "50%",
  },
}));

const Controls = ({ activeSlide, setActiveSlide }) => {
  const classes = useStyles();

  const handleOnClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={classes.controls}>
      {slides.map((i, index) => {
        return (
          <div
            key={index}
            className={
              index === activeSlide ? classes.activeCircle : classes.circle
            }
            onClick={() => handleOnClick(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default Controls;
