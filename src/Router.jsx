import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import components
import App from "./App/App";
import HomePage from "./pages/HomePage";

function Router() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default Router;
