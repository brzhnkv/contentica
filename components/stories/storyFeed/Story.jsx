import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "center",

    width: "100%",
    height: "100%",

    backgroundColor: "red",
  },
  story: {
    /*  position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)", */
    //width: "0",
    /*  marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center", */
  },
  img: {
    alignSelf: "center",
    display: "block",
    maxHeight: "50%",
    width: "auto",
    height: "auto",
    marginLeft: 25,
    marginRight: 25,
  },
  imgSelected: {
    display: "block",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  btnPrev: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(0, -50%)",
    zIndex: 100,
  },
  btnNext: {
    position: "absolute",
    left: "65%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
  },
}));

const Story = ({
  storyPreview,
  isFirst,
  isLast,
  isSelected,
  handleClickPrev,
  handleClickNext,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isSelected ? (
        <div className={classes.story}>
          {!isFirst && (
            <Button
              className={classes.btnPrev}
              variant="text"
              color="default"
              onClick={handleClickPrev}
            >
              Prev
            </Button>
          )}

          <img className={classes.imgSelected} src={storyPreview} />
          {!isLast && (
            <Button
              className={classes.btnNext}
              variant="text"
              color="default"
              onClick={handleClickNext}
            >
              Next
            </Button>
          )}
        </div>
      ) : (
        <img className={classes.img} src={storyPreview} />
      )}
    </div>
  );
};

export default Story;
