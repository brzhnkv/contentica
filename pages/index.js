import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Second from "../components/Second";
import Advantages from "../components/Advantages";
import CheckList from "../components/CheckList";
import Service from "../components/Service";
import Pulse from "../components/Pulse";
import Post from "../components/Post";
import Post_01 from "../components/Post_01";
import Post_02 from "../components/Post_02";
import Post_03 from "../components/Post_03";
import Post_04 from "../components/Post_04";
import Post_05 from "../components/Post_05";
import Post_06 from "../components/Post_06";
import Post_07 from "../components/Post_07";
import Post_08 from "../components/Post_08";
import PostPricing from "../components/pricing/PostPricing";

const useStyles = makeStyles((theme) => ({
  /*  root: {
    background: "rgb(182,192,197)",
    background:
      "linear-gradient(90deg, rgba(182,192,197,1) 0%, rgba(17,45,96,1) 100%)",
  }, */
  root: {
    minHeight: "100vh",
  },
}));

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

export default function Home() {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      {/*  <Pulse /> */}

      <PostPricing />

      {posts.map((i, index) => {
        return (
          <Post
            key={index}
            title={i.title}
            subtitle={i.subtitle}
            picUrl={i.picUrl}
            content={i.content}
          />
        );
      })}

      {/*  <Intro /> */}
      <Second />
      <Advantages />
      <CheckList />
      <Service />
      {/* <Intro />
      <Second />
      <Advantages />
      <CheckList />
      <Service /> */}
    </Layout>
  );
}
