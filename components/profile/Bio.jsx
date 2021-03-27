import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const textTitle = "Digital Agency";
const textBio = [
  "Маркетинговое агентство с фокусом на Инстаграм",
  "Визуал продюсирование бренда",
];

const useStyles = makeStyles((theme) => ({
  bio: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    alignSelf: "flex-start",

    color: "#3B3B3B",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  textBio: {
    alignSelf: "flex-start",
    "& p": {
      color: "#262626",
      fontFamily: "Roboto",
      fontSize: "1.2rem",
      fontWeight: 400,
    },
  },
}));

const Bio = () => {
  const classes = useStyles();
  return (
    <div className={classes.bio}>
      <Typography className={classes.textTitle}>{textTitle}</Typography>
      {textBio.map((line) => {
        return (
          <div className={classes.textBio}>
            <Typography>{line}</Typography>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Bio;
