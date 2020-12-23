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
            <Typography className={classes.btnSpanText}>
              УПАКОВАТЬ СВОЙ БРЕНД
            </Typography>
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
            <img
              src="./../assets/iPhone.png"
              alt=""
              className={classes.iPhone}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
