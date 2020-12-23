import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import StarIcon from "@material-ui/icons/Star";

import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  Paper,
  Divider,
} from "@material-ui/core";

const plans = [
  {
    id: 1,
    title: "40 000 рублей" + <br /> + "+ рекламный бюджет*",
    subtitle: "Консультация",
    description: [
      "Анализ и разбор имеющейся ленты, шапки профиля (главное фото/bio/highlights)",
      "Укажем плюсы и минусы фотографии и их обработку",
      "Советы по дальнейшему видению ленты",
      "Ответим на ваши вопросы",
    ],
  },
  {
    id: 2,
    title: "",
    subtitle: "Полная визуальная концепция",
    description: [
      "Разбор профиля",
      "Составление контент-плана",
      "Определение стиля и цветовой гаммы аккаунта / сторис",
      "Фото и -видео съемка",
      "Составление примерного плана ленты на 21 пост / 30 сторис",
      "Обработка фото",
      "Обновление шапки профиля",
      "Копирайтинг",
    ],
  },
  {
    id: 3,
    title: "",
    subtitle: "All-inclusive",
    description: [
      "Консультация",
      "Полная визуальная концепция",
      "Анализ деятельности конкурентов",
      "Обратная связь с аудиторией",
      "Работа с комментариями и отзывами",
      "Прогревы и стратегии развития блога",
      "Продвижение страницы",
      "Создание",
    ],
  },
  {
    id: 4,
    title: "",
    subtitle: "Дополнительные услуги",
    description: [
      "Разработка логотипа",
      "Монтаж видео из готового материала",
      "Гравировка по металлу",
      "Создание таплинка",
      "Разработка веб-сайта",
      "Разработка приложения на iOS / Android",
      "Автоматизация магазинов (1С, оборудование)",
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    /* background: "rgb(53,73,94)",
    background:
      "linear-gradient(180deg, rgba(52,73,94,1) 0%, rgba(155,89,182,1) 25%, rgba(52,152,219,1) 50%, rgba(46,204,113,1) 75%, rgba(26,188,156,1) 100%)", */
    /* background: "rgb(98,69,208)",
    background:
      "linear-gradient(90deg, rgba(98,69,208,1) 0%, rgba(253,47,46,1) 100%)", */
    /* backgroundColor: "#232323", */
  },
  topBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  middleBlock: { flexGrow: 1, textAlign: "center", marginTop: 10 },
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
  block: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 18,
    background: "rgb(98,69,208)",
    background:
      "linear-gradient(90deg, rgba(98,69,208,1) 0%, rgba(253,47,46,1) 100%)",
    padding: 20,
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    background: "rgb(98,69,208)",
    background:
      "linear-gradient(90deg, rgba(98,69,208,1) 0%, rgba(253,47,46,1) 100%)",
  },
  divider: {
    backgroundColor: "black",
    display: "inline-block",
    width: "80%",
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
  list: {
    textAlign: "left",
    listStyle: "none",
  },
}));

const Service = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" disableGutters>
      <div className={classes.topBlock}>
        <Typography variant="h5">Услуги</Typography>
      </div>

      <Grid container spacing={0} className={classes.middleBlock}>
        {plans.map((p) => {
          return (
            <Grid key={p.id} item xs={12} sm={6} md={6} lg={3}>
              <Paper square className={classes.title}>
                <Typography>{p.title}</Typography>
                <Divider className={classes.divider} />
                <Typography variant="h6">{p.subtitle}</Typography>
              </Paper>
              <Paper square className={classes.block}>
                {p.description.map((i) => {
                  return <li className={classes.list}>{i}</li>;
                })}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Service;
