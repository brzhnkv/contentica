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
    marginTop: 60,
    verticalAlign: "middle",
    userSelect: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    outline: "none",
    border: "0",
    boxShadow: "0 3px 14px #000",
    /* backgroundImage:
      "linear-gradient(54.7deg, #960ead, #0ad8c7, #960ead, #0ad8c7)", */
    backgroundImage:
      "linear-gradient(54.7deg, #833ab4, #e1306c, #833ab4 , #e1306c)",
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

const Post_01 = (props) => {
  const classes = useStyles();

  const [x, cycleX] = useCycle(0, 50, 100);

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12} className={classes.leftBlock}>
        <Typography variant="h6">
          Создание и продвижение
          <br />
          личного бренда в Instagram
        </Typography>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <Button className={classes.button}>
            <Typography className={classes.btnSpanText}>
              УПАКОВАТЬ СВОЙ БРЕНД
            </Typography>
          </Button>
        </motion.div>
        <Typography variant="body1" className={classes.textSpector}>
          Огромный спектр услуг для твоего бизнеса
        </Typography>
        <Typography variant="h6" className={classes.textBottom}>
          Не трать лишние время и деньги
          <br />
          Начни получать доход от Инстаграма уже сейчас!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Post_01;
