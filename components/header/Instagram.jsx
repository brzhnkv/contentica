import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: 35,
    backgroundColor: "#fafafa",
  },
  container: {
    display: "flex",

    minWidth: "60%",
    maxWidth: "60%",
  },
  logoInstagram: {
    marginLeft: "20px",
    paddingTop: 4,
    color: "#232323",
  },
}));

const Instagram = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={false} disableGutters className={classes.container}>
        <img
          className={classes.logoInstagram}
          src="/assets/logo_instagram.png"
        />
      </Container>
    </div>
  );
};

export default Instagram;
