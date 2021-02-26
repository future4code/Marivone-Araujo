import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import RegisterPage from "../pages/RegisterPage";
import FeedPage from "../pages/FeedPage"
import ErrorPage from "../pages/ErrorPage"

const Router = ({setRightButton}) => {
  return (
      <Switch>
        <Route exact path="/">
          <LoginPage setRightButton={ setRightButton} />
        </Route>
        <Route exact path="/cadastrar">
          <RegisterPage setRightButton={ setRightButton}/>
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post/:postId">
          <PostPage />
        </Route>
        <Route exact path="/errorpage">
          <ErrorPage />
        </Route>

      </Switch>
    
  );
};

export default Router;
