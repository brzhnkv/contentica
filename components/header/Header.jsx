import React, { useState, useEffect } from "react";
import Link from "next/link";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import MenuIcon from "@material-ui/icons/Menu";
import InstagramIcon from "@material-ui/icons/Instagram";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";

const useStyles = makeStyles((theme) => ({
  root: {},
  innerContainer: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    display: "flex",
  },
  logo: {
    height: 50,
  },
  middleLogo: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",

    webkitUserSelect: "none",
    khtmlUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    oUserSelect: "none",
    userSelect: "none",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  parent: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: theme.palette.secondary.main,
  },
  rightChild: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  iconInsta: {
    marginLeft: 20,
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  iconPhone: {
    marginRight: 5,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [header, setHeader] = useState("headerTransparent");
  const [elevation, setElevation] = useState(0);
  const listenScrollEvent = (event) => {
    if (window.scrollY < 85) {
      setHeader("headerTransparent");
      setElevation(0);
    } else if (window.scrollY > 95) {
      setHeader("headerColored");
      setElevation(3);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Container
          maxWidth="lg"
          disableGutters
          className={classes.innerContainer}
        >
          <Box className={classes.parent}>
            <Box>
              <Link href={"/"}>
                <MenuIcon />
              </Link>
            </Box>
            <Box className={classes.middleLogo}>
              <img src="/../../assets/logo.png" className={classes.logo}></img>
            </Box>
            <Box className={classes.rightChild}>
              <PermPhoneMsgIcon className={classes.iconPhone} />
              <span>8 800 555 35 35</span>
              <Link
                className={classes.link}
                href="https://instagram.com/con.tentica"
              >
                <InstagramIcon className={classes.iconInsta} />
              </Link>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
    /* 
    <AppBar position="static" className={classes[header]} elevation={elevation}>
      <Toolbar className={classes.toolbar} disableGutters>
      
        <div
      className={flexStyles.relativeParent}
      minWidth={{ xs: 300, sm: 500 }}
      bgcolor={'grey.100'}
    >
      <MenuIcon/>
      <div className={flexStyles.MiddleItemRowFlex}>
        <Link href={"/"}>
          contentica
        </Link>
        </div>
        <div className={cx(flexStyles.rightChild, flexStyles.parent)}>
  <InstagramIcon/>
</div>
    </div>
        


      </Toolbar>
    </AppBar> */
  );
};

export default Header;
