import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { motion, useCycle } from "framer-motion";

import { Container, Grid, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@keyframes pulse_intro": {
    "0%": {
      boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0.24)",
      background:
        "-webkit-gradient(linear, 0% 0%, 100% 0%, from(rgb(114, 30, 52)), to(rgb(114, 12, 25)))",
    },
    "90%": {
      boxShadow: "0px 0px 0px 140px rgba(255, 255, 255, 0)",
      background:
        "-webkit-gradient(linear, 0% 0%, 100% 0%, from(rgb(79, 17, 38)), to(rgb(76, 18, 40)))",
    },
    "95%": {
      boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0)",
    },
    "100%": {
      boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0.24)",
      backgroundColor: "#4285f4",
    },
  },

  root: {
    /*  maxWidth: "100wv",
    maxHeight: "100vh",
    overflowY: "hidden", */

    /*  position: "absolute",
    top: "50%",
    left: "50%", */
    //margin-left: -20px;
    //margin-top: -20px;
    //height: 40px;
    //width: 40px;

    overflow: "hidden",
    position: "relative",
    boxSizing: "border-box",

    width: "100%",
    height: "90% !important",
    background:
      "-webkit-gradient(linear, 0% 0%, 100% 0%, from(rgb(133, 38, 72)), to(rgb(139, 27, 51)))",
    boxShadow: "0 3px 14px #000",

    zIndex: 100000,
    width: "800px",
    minHeight: "800px",

    borderRadius: "50%",
    color: "rgba(255, 255, 255, 0.1)",
    animation: "$pulse_intro 2.4s ease-in-out infinite",
    webkitAnimation: "$pulse_intro 2.4s ease-in-out infinite",
    mozAnimation: "$pulse_intro 2.4s ease-in-out infinite",
    oAnimation: "$pulse_intro 2.4s ease-in-out infinite",
    msAnimation: "$pulse_intro 2.4s ease-in-out infinite",
  },
  leftBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: 10,
  },
  button: {
    width: 450,
    height: 70,
    fontSize: 20,
    marginTop: 60,
    verticalAlign: "middle",
    userSelect: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    outline: "none",
    border: "0",
    boxShadow: "0 3px 14px #000",
    backgroundImage:
      "linear-gradient(54.7deg, #960ead, #0ad8c7, #960ead, #0ad8c7)",
    backgroundSize: "300% 100%",
    borderRadius: "50px",
    animation: "$gradient 2.5s infinite linear",
  },
  btnSpanText: {
    zIndex: 2,
    position: "relative",
    fontWeight: 400,
    fontSize: "1.5rem",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "4px",
  },
  textSpector: {
    marginTop: 10,
    fontSize: "1.2rem",
  },
  textBottom: {
    marginTop: 150,
  },
  rightBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.palette.primary.main,
    marginTop: 30,
  },
  subtitle: {
    color: theme.palette.primary.main,
    marginTop: 10,
    textAlign: "center",
  },
  animationBlock: {
    marginTop: 10,
  },
  iPhone: {
    width: 300,
  },
}));

const Pulse = (props) => {
  const classes = useStyles();

  const [x, cycleX] = useCycle(0, 50, 100);

  return (
    <div>
      <div className={classes.root}></div>

      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12} md={8} lg={9}></Grid>
          <Grid item xs={12} md={4} lg={3} className={classes.rightBlock}>
            <Typography variant="h3" className={classes.title}>
              Con.Tentica
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              Маркетинговое агентство
              <br />с фокусом на Инстаграм
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8} lg={9} className={classes.leftBlock}>
            <Typography variant="h6">
              Создание и продвижение
              <br />
              личного бренда в Instagram
            </Typography>
            <motion.Button
              className={classes.button}
              whileHover={{
                scale: 1.1,
              }}
            >
              <Typography className={classes.btnSpanText}>
                УПАКОВАТЬ СВОЙ БРЕНД
              </Typography>
            </motion.Button>
            <Typography variant="body1" className={classes.textSpector}>
              Огромный спектр услуг для твоего бизнеса
            </Typography>
            <Typography variant="h6" className={classes.textBottom}>
              Не трать лишние время и деньги
              <br />
              Начни получать доход от Инстаграма уже сейчас!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={classes.rightBlock}>
            <div className={classes.animationBlock}>
              <img
                src="./../assets/iPhone.png"
                alt=""
                className={classes.iPhone}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Pulse;
