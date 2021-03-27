import Head from "next/head";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { motion, useCycle } from "framer-motion";

import {
  Container,
  Grid,
  Button,
  Typography,
  Paper,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  /*  root: {
   
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",

    flex: "1 1 100%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",

  }, */
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    margin: 0,
    minWidth: "100%",
  },
  card: {
    minWidth: "100%",
    maxWidth: "100%",

    marginBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
    width: 150,
    height: 150,
  },

  postTitle: {
    color: theme.palette.primary.main,
  },
}));

const Post = ({ title, subtitle, picUrl, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={picUrl}>
              Con.logo
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/*    <MoreVertIcon /> */}
            </IconButton>
          }
          title={
            <Typography variant="h3" className={classes.postTitle}>
              {title}
            </Typography>
          }
          subheader={
            <Typography variant="h5" className={classes.postTitle}>
              {subtitle}
            </Typography>
          }
        />
        <Divider />
        {/*  <CardMedia
            className={classes.media}
            image={picUrl}
            title="Paella dish"
          /> */}
        <CardContent>{content}</CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/*   <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">{/*  <ShareIcon /> */}</IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
