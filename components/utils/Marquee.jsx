import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marqueeVertical: {
    transformOrigin: "left",
    transform: "rotate(90deg) translateY(-50px)",
  },
  marqueeWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    animationName: "$marquee",
    animationDuration: "30s",
    animationTimingFunction: "linear",
    animationDelay: "0s",
    animationIterationCount: "infinite",
    willChange: "transform",
  },
  list: {
    display: "flex",
    padding: 0,

    listStyle: "none",
    "& li": {
      display: "block",
      padding: "0 20px",
      "& span": {
        fontSize: "1.5rem",
        color: "#2e2e2e",
      },
      "&:last-child": {
        $span: {
          position: "absolute",
          top: 0,
          left: "100%",
        },
      },
    },
  },

  "@keyframes marquee": {
    from: {
      transform: "translateZ(0)",
    },
    to: {
      transform: "translate3d(-100%,0,0)",
    },
  },
}));

const Marquee = ({ text }) => {
  const classes = useStyles();

  const uls = [];
  const lis = [];

  for (let i = 0; i < 2; i++) {
    uls.push({});
  }
  for (let i = 0; i < 9; i++) {
    lis.push({});
  }

  return (
    <>
      <div className={classes.marqueeVertical}>
        <div className={classes.marqueeWrapper}>
          {uls.map((i, index) => {
            return (
              <ul key={index} className={classes.list}>
                {lis.map((i, index) => {
                  return (
                    <li key={index + 50}>
                      <span className={classes.span}>{text}</span>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <div className={classes.marqueeWrapper}>
        {uls.map((i, index) => {
          return (
            <ul key={index + 100} className={classes.list}>
              {lis.map((i, index) => {
                return (
                  <li key={index + 200}>
                    <span className={classes.span}>{text}</span>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Marquee;
