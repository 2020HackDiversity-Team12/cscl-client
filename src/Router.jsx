import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import components
import App from "./App/App";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import SharedComponents from "./pages/SharedComponents";

import AdminLoginPage from "./pages/AdminLoginPage";

function Router() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          {/** PRIVATE ROUTES*/}

          {/** PUBLIC ROUTES*/}
          <Route path="/admin" component={AdminLoginPage} />
          <Route path="/components" component={SharedComponents} />
          <Route path="/" component={HomePage} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default Router;
