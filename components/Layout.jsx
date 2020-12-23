import Head from "next/head";
import Header from "./header/Header";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

const useStyles = makeStyles((theme) => ({}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>InstaNext</title>
      </Head>

      <CssBaseline>
        <Header />

        {props.children}
      </CssBaseline>
    </>
  );
};

export default Layout;
