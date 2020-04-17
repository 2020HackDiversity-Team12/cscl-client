import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// import components
import App from "./App/App";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import BookItemsPage from "./pages/BookItemsPage";
import SharedComponents from "./pages/SharedComponents";

import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import BookDetailPage from "./pages/BookDetailPage";
import SearchPage from "./pages/SearchPage";

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

function Router() {
  return (
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App>
          <Switch>
            {/** PRIVATE ROUTES*/}
            <PrivateRoute path="/admin" component={AdminPage} />
            {/** PUBLIC ROUTES*/}
            <Route path="/browse" component={BookItemsPage} />
            <Route path="/detail/:id" component={BookDetailPage} />
            <Route path="/search/:q" component={SearchPage} />
            <Route path="/auth" component={AdminLoginPage} />
            <Route path="/components" component={SharedComponents} />
            <Route path="/" component={HomePage} />
          </Switch>
        </App>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default Router;
