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
  },
  card: {
    minWidth: "60%",
    maxWidth: "60%",

    marginTop: 20,
    marginBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters disableSpacing>
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/*    <MoreVertIcon /> */}
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {/*   <FavoriteIcon /> */}
            </IconButton>
            <IconButton aria-label="share">{/*  <ShareIcon /> */}</IconButton>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default Post;
