import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { Container, Grid, Button, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const Second = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" disableGutters>
      <div className={classes.topBlock}>
        <Typography variant="h5" className={classes.title}>
          Освободи свое время - доверь свой профиль профессионалам
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Упакуй свой бренд в одном месте, вместо найма десяти сотрудников
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Доверившись нам, Вы сохраните не только свое время и нервы, а еще и
          приумножите свою активность и продажи
        </Typography>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={8} className={classes.leftBlock}>
          <Typography>Вам стоит доверить свой профиль нам, если Вы:</Typography>
          <ul>
            <li>Хотите повысить свои оффлайн продажи</li>
            <li>Хотите сэкономить десятки часов каждый месяц</li>
            <li>
              Вкладываете много денег в продвижение, но ваша активность почти не
              растет
            </li>
            <li>Не успеваете следить за трендами и антитрендами</li>
            <li>
              Не хотите тратить время ( и память на телефоне ) на поиски
              приложений для актуальной обработки
            </li>
            <li>Планируете подогреть интерес ваших клиентов к вам</li>
            <li>Хотите отличаться от ваших конкурентов</li>
          </ul>
        </Grid>
        <Grid item xs className={classes.rightBlock}>
          <Box className={classes.animationBlock}>
            привлекательные мудборды с анимацией вращающегося по кругу логотипа
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Second;
