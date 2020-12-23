import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { motion, useCycle } from "framer-motion";

import { Container, Grid, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@keyframes gradient": {
    from: {
      backgroundPosition: "0 0",
    },
    to: {
      backgroundPosition: "100% 0",
    },
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
    marginTop: 80,
    outline: "none",
    /*  position: "relative",
    display: "inline-block", */
    /*  verticalAlign: "middle",
    touchAction: "manipulation",
    userSelect: "none", */
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    textAlign: "center",
    border: "0",
    textTransform: "uppercase",
    letterSpacing: "4px",

    fontSize: "24px",
    color: "#fff",
    boxShadow: "0 3px 14px #000",

    // backgroundImage: "linear-gradient(90deg, #da3287, #ffde5e)",
    backgroundImage:
      "linear-gradient(54.7deg, #960ead, #0ad8c7, #960ead, #0ad8c7)",
    //backgroundImage: "linear-gradient(90deg, #da3287, #ffde5e, #da3287, #ffde5e)",
    backgroundSize: "300% 100%",
    animation: "$gradient 2.5s infinite linear",
    //  background: "linear-gradient(54.7deg, #0ad8c7 12%,#960ead 100%)",
    //animation: "$gradient 5s infinite",
    /* animationDuration: "3s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite", */

    /*  "&:hover, &:active": {
      color: "#fff",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      opacity: 0,
      transition: "all 500ms ease-in-out",
      background: "linear-gradient(54.7deg, #0ad8c7 12%,#960ead 100%)",
    },
    "&:hover": {
      "&:before": {
        opacity: 1,
        color: "#fff",
      },
    }, */
    lineHeight: "68px",
    padding: "0 24px",
  },
  btnSpanText: {
    zIndex: 2,
    position: "relative",
  },
  textSpector: {
    marginTop: 10,
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

const Intro = (props) => {
  const classes = useStyles();

  const [x, cycleX] = useCycle(0, 50, 100);

  return (
    <Container maxWidth="lg" disableGutters>
      <Grid container spacing={0}>
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
      <Grid container spacing={0}>
        <Grid item xs={12} md={8} lg={9} className={classes.leftBlock}>
          <Typography variant="h6">
            Увеличим активность Вашего профиля
            <br /> на 43% за 3 недели
          </Typography>
          <motion.Button
            className={classes.button}
            whileHover={{
              scale: 1.1,
            }}
          >
            <span className={classes.btnSpanText}>УПАКОВАТЬ СВОЙ БРЕНД</span>
          </motion.Button>
          <Typography variant="body1" className={classes.textSpector}>
            Огромный спектр для твоего бизнеса
          </Typography>
          <Typography variant="h6" className={classes.textBottom}>
            Не трать лишние время и деньги
            <br />
            Начни получать доход от Инстаграма уже сейчас!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3} className={classes.rightBlock}>
          <div className={classes.animationBlock}>
            <img src="./../assets/iPhone.png" className={classes.iPhone} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
