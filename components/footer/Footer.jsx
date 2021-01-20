import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Fab from "@material-ui/core/Fab";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    /*  height: 40, */
    bottom: 0,

    /*  backgroundColor: "white", */
  },
  toolbar: {
    maxHeight: 20,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
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
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.parent}>
            <Box className={classes.rightChild}>
              <span>8 800 555 35 35</span>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
