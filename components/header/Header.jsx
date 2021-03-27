import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100vw",
    height: 55,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
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
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position={"sticky"} elevation={1} className={classes.appBar}>
      <Container maxWidth={false} disableGutters className={classes.container}>
        <a href="https://instagram.com/con.tentica" target="_blank">
          <img
            className={classes.logoInstagram}
            src="/assets/logo_instagram.png"
          />
        </a>
      </Container>
    </AppBar>
  );
};

export default Header;
