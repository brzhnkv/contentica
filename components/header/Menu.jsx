import React, { useState, useEffect } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  menuList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    //paddingLeft: 50,
    padding: 0,
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {},
    fontSize: "1.2em",
    fontWeight: 500,
    color: "#003d49",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <MenuList className={classes.menuList}>
      <Link href={"/"}>
        <MenuItem className={classes.menuItem} dense>
          Главная
        </MenuItem>
      </Link>
      <Link href={"/about-us"}>
        <MenuItem className={classes.menuItem} dense>
          О компании
        </MenuItem>
      </Link>
      <Link href={"/about-product"}>
        <MenuItem className={classes.menuItem} dense>
          О продукции
        </MenuItem>
      </Link>
      <Link href={"/marketing"}>
        <MenuItem className={classes.menuItem} dense>
          Маркетинг
        </MenuItem>
      </Link>
      <Link href={"/store"}>
        <MenuItem className={classes.menuItem} dense>
          Магазин
        </MenuItem>
      </Link>
      <Link href={"/gallery"}>
        <MenuItem className={classes.menuItem} dense>
          Галерея
        </MenuItem>
      </Link>
    </MenuList>
  );
};

export default Menu;
