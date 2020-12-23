import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Second from "../components/Second";
import Advantages from "../components/Advantages";
import CheckList from "../components/CheckList";
import Service from "../components/Service";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(182,192,197)",
    background:
      "linear-gradient(90deg, rgba(182,192,197,1) 0%, rgba(17,45,96,1) 100%)",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <Intro />
      <Second />
      <Advantages />
      <CheckList />
      <Service />
    </Layout>
  );
}
