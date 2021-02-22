import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import PostPage from "../pages/postPage";
import RegisterPage from "../pages/registerPage";
import FeedPage from "../pages/feedPage"
import Header from "../components/Header"

const Router = () => {
  return (
    <BrowserRouter>

    <Header />
    
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>


        <Route exact path="/feed">
          <FeedPage />
        </Route>

        <Route exact path="/post">
          <PostPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
