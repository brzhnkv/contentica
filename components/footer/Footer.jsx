import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    width: "100%",
    height: 40,
    bottom: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
  },
  navLeft: {
    position: "sticky",
    width: "20%",
    height: 40,
    bottom: 0,
    zIndex: 100,
  },
  navRight: {
    position: "sticky",
    width: "20%",
    height: 40,
    bottom: 0,
    zIndex: 100,
  },
  element: {
    color: "rgb(26,26,34)",
    fontWeight: 300,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("up");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scroll = (y) => {
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const openInstagram = (e) => {
    e.preventDefault();
    window.open("https://instagram.com/con.tentica", "_blank");
  };

  return (
    <div className={classes.root}>
      <BottomNavigation
        className={classes.navLeft}
        showLabels
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Вверх"
          value="up"
          icon={<ArrowUpwardIcon />}
          onClick={() => scroll(0)}
          className={classes.element}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
          className={classes.element}
        />
      </BottomNavigation>
      <BottomNavigation
        className={classes.navRight}
        showLabels
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Instagram"
          value="instagram"
          icon={<InstagramIcon />}
          onClick={(e) => openInstagram(e)}
          className={classes.element}
        />
        <BottomNavigationAction
          label="Обратная связь"
          value="callback"
          icon={<PhoneCallbackIcon />}
          className={classes.element}
        />
      </BottomNavigation>
    </div>
  );
}
