import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    width: "30%",
    textAlign: "center",
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    border: "solid 1px #ebebeb",
    borderRadius: "50%",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Picture = () => {
  const classes = useStyles();
  return (
    <div className={classes.imageWrapper}>
      <Link href="/">
        <img
          className={classes.image}
          src="/assets/posts/post_01/post_picture.png"
        />
      </Link>
    </div>
  );
};

export default Picture;
