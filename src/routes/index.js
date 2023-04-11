import React from "react";
import { Switch, Route } from "react-router-dom";

import MyRoute from "./MyRoute";
import HomePage from "../pages/HomePage";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={HomePage} isClosed={false} />
      <MyRoute exact path="/profile" component={Profile} isClosed />
      <MyRoute exact path="/account" component={Account} isClosed />
      <MyRoute exact path="/signup" component={Cadastro} isClosed={false} />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
