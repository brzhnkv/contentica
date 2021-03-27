import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import Bio from "./Bio";
import Picture from "./Picture";

const buttons = [
  { quantity: "6", text: " проектов", link: "" },
  { quantity: "120", text: " чего-то", link: "" },
  { quantity: "360", text: " чего-то еще", link: "" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
    height: 180,
  },

  info: {
    minHeight: "100%",
    marginLeft: 20,
    display: "flex",
    flex: "2",
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "flex-start",
    "& div": {
      display: "flex",

      justifyContent: "flex-start",
      alignItems: "center",
    },
  },

  usernameGroup: {
    "& .title": {
      fontFamily: "Roboto",
      fontSize: "1.6rem",
      fontWeight: "300",
      marginRight: 15,
    },
    "& Button": {
      textTransform: "none",
      marginRight: 10,
      backgroundColor: "#0095f6",
      color: "white",
      border: 0,
      height: 30,

      fontFamily: "Roboto",
      fontSize: "1.0rem",
      fontWeight: 400,

      "&:hover": {
        backgroundColor: "#025cff",
      },
    },
  },
  customButton: {
    marginRight: 30,

    fontFamily: "Roboto",
    fontSize: "0.95rem",
    "& span": { fontWeight: 600, color: "#262626" },
    "& a": { color: "#3B3B3B", textDecoration: "none" },
  },
}));

const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Picture />
      <div className={classes.info}>
        <div className={classes.usernameGroup}>
          <Typography className="title">con.tentica</Typography>
          <Button variant="outlined">Оставить заявку</Button>
          {/*  <Button variant="outlined">кнопка1</Button>
          <Button variant="outlined">кнопка2</Button> */}
        </div>
        <div className={classes.infoGroup}>
          {buttons.map((b) => {
            return (
              <div className={classes.customButton}>
                <a href={b.link}>
                  <span>{b.quantity}</span>
                  {b.text}
                </a>
              </div>
            );
          })}
        </div>
        <Bio />
      </div>
    </div>
  );
};

export default Info;
