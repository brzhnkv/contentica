import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
    height: 200,
    position: "relative",
    backgroundColor: "#333",
    border: "15px solid #1f2e40",
    borderRadius: "5px",
  },
  dotOuter: {
    position: "absolute",
    top: 0,
    left: 0,
    animation: "$dotX 3.45s linear infinite",
  },
  /*   dot: {
    backgroundColor: "white",
    height: 20,
    width: 30,
    animation: "$dotY 2.45s linear infinite",
  }, */
  logo: {
    height: 50,
    animation: "$dotY 2.45s linear infinite",
  },
  "@keyframes dotY": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(150px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  "@keyframes dotX": {
    "0%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateX(240px)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },

  case: {
    display: "inline-block",
    backgroundColor: "#2e4960",
    padding: "20px 20px 20px 20px",
    margin: "100px",
    position: "relative",

    "&:after": {
      content: '""',
      backgroundColor: "#333",
      height: "10px",
      width: "80%",
      position: "absolute",
      bottom: "-10px",
      left: "10%",
    },
  },

  antenna: {
    backgroundColor: "#666",
    height: "40px",
    width: "80px",
    position: "absolute",
    zIndex: "-1",
    top: "-15px",
    left: "calc(50% - 40px)",
    borderRadius: "100%",

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      left: "calc(50% + 10px)",
      bottom: "calc(100% - 5px)",
      height: "80px",
      width: "6px",
      backgroundColor: "#666",
      transformOrigin: "bottom center",
      transform: "rotate(45deg)",
    },
    "&:after": {
      left: "auto",
      right: "calc(50% + 10px)",
      transform: "rotate(-45deg)",
    },
  },
}));

const DVDLogo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.case}>
      <div className={classes.antenna}></div>
      <div className={classes.container}>
        <div className={classes.dotOuter}>
          <img src={"/assets/logo.png"} className={classes.logo} />
        </div>
      </div>
    </div>
  );
};

export default DVDLogo;
