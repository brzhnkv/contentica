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
import { Avatar } from "@material-ui/core";
import { useGradientAvatarStyles } from "@mui-treasury/styles/avatar/gradient";
import Instagram from "./Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
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
    flex: 1,
    justifyContent: "space-between",
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
    color: "black",
    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  iconPhone: {
    color: "black",
    marginRight: 5,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const styles = useGradientAvatarStyles({
    size: 80,
    gap: 0,
    paddingLeft: 50,
    marginRight: "5px",
    thickness: 5,
    gapColor: "#f4f7fa",
    color: "linear-gradient(to bottom right, #feac5e, #c779d0, #4bc0c8)",
  });

  /* const [header, setHeader] = useState("headerTransparent");
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
  }, []); */

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Instagram />
        <Toolbar>
          <Box className={classes.parent}>
            <div className={styles.root}>
              <Avatar src="/../../assets/logo.png" />
            </div>
            <div className={styles.root}>
              <Avatar src={"https://i.pravatar.cc/300?img=30"} />
            </div>

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
        </Toolbar>
      </AppBar>
    </>
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
/* return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Box className={classes.parent}>
          <img
            src="/../../assets/logo.png"
            alt=""
            className={classes.logo}
          ></img>
          <div className={styles.root}>
            <Avatar src={"https://i.pravatar.cc/300?img=30"} />
          </div>
          <Box className={classes.middleLogo}>
            <Box>
              <Link href={"/"}>
                <MenuIcon />
              </Link>
            </Box>
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
        



  );
}; */

export default Header;
