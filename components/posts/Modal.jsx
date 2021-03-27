import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import PostPricing from "../pricing/PostPricing";
import Post from "../Post";
import Post_01 from "../Post_01";
import Post_02 from "../Post_02";
import Post_03 from "../Post_03";
import Post_04 from "../Post_04";
import Post_05 from "../Post_05";
import Post_06 from "../Post_06";
import Post_07 from "../Post_07";
import Post_08 from "../Post_08";

const posts = [
  {
    title: "Con.Tentica",
    subtitle: "Маркетинговое агентство с фокусом на Инстаграм",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_01 />,
  },
  {
    title: "Освободи свое время - доверь свой профиль профессионалам",
    subtitle:
      "Упакуй свой бренд в одном месте, вместо найма десяти сотрудников",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_02 />,
  },
  {
    title: "Наши преимущества",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_03 />,
  },
  {
    title: "Чек-лист",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_04 />,
  },
  {
    title: "Заголовок",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_05 />,
  },
  {
    title: "DVD",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_06 />,
  },
  {
    title: "Marquee",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_07 />,
  },
  {
    title: "Marquee2",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: <Post_08 />,
  },
  {
    title: "Заголовок",
    subtitle: "Подзаголовок",
    picUrl: "/assets/posts/post_01/post_picture.png",
    content: "Контент",
  },
];

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "95vh",
    maxHeight: "95vh",

    backgroundColor: "#fafafa",
  },
  dialogContent: {
    /*  display: "flex",
    flexDirection: "column",
    alignItems: "stretch", */
    height: "100%",
    padding: 0,
  },
}));

export default function Modal({ open, setOpen, postClicked }) {
  const classes = useStyles();

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const myRef = React.useRef(null);
  const scrollRef = React.useRef([]);
  const executeScroll = (post) => scrollRef.current[post].scrollIntoView();

  return (
    <React.Fragment>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        scroll={"paper"}
        open={open}
        onEntering={() => executeScroll(postClicked)}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        {/* <DialogContent clasName={classes.dialogContent}> */}
        <PostPricing index={0} scrollRef={scrollRef} title="Сара" />
        <PostPricing index={1} scrollRef={scrollRef} title="Женя" />
        <PostPricing index={2} scrollRef={scrollRef} title="АЛЛАХАКБАР!!1" />

        {posts.map((i, index) => {
          return (
            <Post
              myRef={myRef}
              key={index}
              title={i.title}
              subtitle={i.subtitle}
              picUrl={i.picUrl}
              content={i.content}
            />
          );
        })}
        {/*   </DialogContent> */}
        {/*  <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
