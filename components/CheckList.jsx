import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { Container, Grid, Button, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#efefef", */
  },
  topBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#212121",
    color: "#fff",
    width: 300,
    height: 80,
    fontSize: 20,
    marginTop: 80,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
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
    width: 400,
    height: 500,
    backgroundColor: "red",
  },
  iPhone: {
    width: 300,
  },
}));

const CheckList = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" disableGutters>
      <Grid container spacing={0} className={classes.topBlock}>
        <Grid item>
          <Typography variant="h5" className={classes.title}>
            Получить бесплатный чек-лист по ведению профиля
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.subtitle}>
            трендов и антитрендов оформления профиля и обработки фото
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.subtitle}>
            Для тебя мы подготовили матер-класс по правильному и актуальному
            ведению твоей страницы профиля
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.subtitle}>
            Получить бесплатный чек-лист по ведению профиля
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CheckList;
