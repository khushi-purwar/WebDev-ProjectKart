import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, AppBar, Typography } from "@material-ui/core";
import Home from "./components/Home";
import css from "./App.module.css";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <AppBar className={css.appBar} position="static" color="inherit">
          <Typography className={css.heading} variant="h2" align="center">
            Best Places in the World
          </Typography>
        </AppBar>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
