import Head from "next/head";
import Header from "./header/Header";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Instagram from "./header/Instagram";
import Footer from "./footer/Footer";

const useStyles = makeStyles((theme) => ({}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Con.Tentica</title>
      </Head>
      <>
        <CssBaseline />
        <Header />

        {props.children}
        <Footer />
      </>
    </>
  );
};

export default Layout;
