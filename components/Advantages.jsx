import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import StarIcon from "@material-ui/icons/Star";

import { Container, Grid, Button, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#fff", */
  },
  topBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  middleBlock: { textAlign: "center", marginTop: 10 },
  bottomBlockLeft: { marginTop: 50 },
  bottomBlockRight: { marginTop: 10 },
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
  icon: {
    width: 50,
    height: 50,
  },
}));

const Advantages = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" disableGutters>
      <div className={classes.topBlock}>
        <Typography variant="h5" className={classes.title}>
          Наши преимущества
        </Typography>
      </div>
      <Grid container spacing={0} className={classes.middleBlock}>
        <Grid item xs={4} className={classes.leftBlock}>
          <MonetizationOnIcon className={classes.icon} />
          <Typography>Фиксированная цена</Typography>
        </Grid>
        <Grid item xs={4} className={classes.leftBlock}>
          <HourglassFullIcon className={classes.icon} />
          <Typography>Сделаем раньше дедлайна</Typography>
        </Grid>
        <Grid item xs={4} className={classes.leftBlock}>
          <StarIcon className={classes.icon} />
          <Typography>Гарантия результата</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} className={classes.bottomBlockLeft}>
        <Grid item xs={6}>
          <Typography>
            Мы молодая, амбициозная команда профессионально обученная на
            продвижение бизнеса в социальных сетях
          </Typography>
          <Typography>Мы охуенные.</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Grid container spacing={0} className={classes.bottomBlockRight}>
        <Grid item xs={6}></Grid>
        <Grid container item xs={6} spacing={0}>
          <Grid item>
            <Typography>
              Всё просто, когда для создания и развития бизнеса доступны десятки
              стратегий, сотни каналов, тысячи инструментов и десятки тысяч
              вариаций их использования, планирования, сбора и подсчёта данных.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Нужен тот, кто умеет беспристрастно анализировать инструменты,
              собирать из данных максимально прибыльные связки и находить лучших
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Advantages;
