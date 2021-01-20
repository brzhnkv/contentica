import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: "100vw",
    height: "40px",
    backgroundColor: "#fafafa",
  },
  title: {
    marginLeft: "20px",
    fontSize: "1.2rem",
  },
}));

const Instagram = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.title}>Instagram</span>
    </div>
  );
};

export default Instagram;
