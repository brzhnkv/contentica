import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { slides } from "./data";

import {
  Button,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Divider,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import Controls from "./Controls";
import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    margin: 0,
  },
  card: {
    minWidth: "60%",
    maxWidth: "60%",
    height: 750,
    backgroundColor: "rgb(249,215,214)",
    position: "relative",
    marginBottom: 50,
    "&::after": {
      content: '""',
      height: "25%",
      width: "100%",
      backgroundColor: "white",
      display: "block",
      position: "absolute",
      bottom: 0,
    },
  },
  cardHeader: {
    backgroundColor: "white",
    height: 150,
  },
  avatar: {
    backgroundColor: red[500],
    width: 120,
    height: 120,
  },
  postTitle: {
    color: theme.palette.primary.main,
  },
  square: {
    width: "80%",
    height: 400,
    marginTop: 50,
    zIndex: 1,

    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",

    boxShadow: "-2px 2px 10px rgba(68, 68, 68, 0.8)",
    backgroundColor: (props) => props.color,
  },
}));

const PostPricing = ({ title, subtitle, picUrl, content }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const color = slides[activeSlide].color;
  const classes = useStyles({ color });

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={picUrl}>
              image
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/*    <MoreVertIcon /> */}
            </IconButton>
          }
          title={
            <Typography variant="h3" className={classes.postTitle}>
              Заголовок
            </Typography>
          }
          subheader={
            <Typography variant="h5" className={classes.postTitle}>
              Подзаголовок
            </Typography>
          }
        />
        <Divider />

        <CardContent>
          <div className={classes.square}>{slides[activeSlide].color}</div>
          <Controls activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

          <Modal />
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPricing;
