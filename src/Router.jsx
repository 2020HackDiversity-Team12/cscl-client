import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import components
import App from "./App/App";
import SharedComponents from "./pages/SharedComponents";

function Router() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/components" component={SharedComponents} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

export default Router;
