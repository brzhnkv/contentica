import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./../posts/Modal";

const postsPreview = [
  "/assets/posts/post_01/preview.jpg",
  "/assets/posts/post_02/preview.png",
  "/assets/posts/post_03/preview.png",
  "/assets/posts/post_04/preview.png",
  "/assets/posts/post_05/preview.png",
  "/assets/posts/post_06/preview.png",
];

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    minWidth: "100%",
    flexDirection: "column",
    marginTop: 20,

    /*   justifyContent: "space-between", */

    "& .col": {
      flex: 1,
      display: "flex",
      marginBottom: 15,

      minWidth: "100%",
      justifyContent: "space-between",

      "& img": {
        flex: 1,
        maxWidth: "32%",
        cursor: "pointer",
      },
    },
  },
}));

const Feed = () => {
  const classes = useStyles();

  const [postClicked, setPostClicked] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const openFeed = (post) => {
    setPostClicked(post);
    setOpen(true);
  };
  return (
    <div>
      <div className={classes.grid}>
        <div className="col">
          <img src={postsPreview[0]} onClick={() => openFeed(0)} />
          <img src="/assets/300x300.png" onClick={() => openFeed(1)} />
          <img src="/assets/300x300.png" onClick={() => openFeed(2)} />
        </div>
        <div className="col">
          <img src="/assets/300x300.png" />
          <img src="/assets/300x300.png" />
          <img src="/assets/300x300.png" />
        </div>
        {/*  <div className="col">
      <img src="/assets/300x300.png" />
      <img src="/assets/300x300.png" />
      <img src="/assets/300x300.png" />
    </div> */}
      </div>
      <Modal open={open} setOpen={setOpen} postClicked={postClicked} />
    </div>
  );
};

export default Feed;
