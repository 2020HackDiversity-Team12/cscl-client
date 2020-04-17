import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import components
import App from "./App/App";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import BookItemsPage from "./pages/BookItemsPage";
import SharedComponents from "./pages/SharedComponents";

import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import AdminAddBookPage from "./pages/AdminAddBookPage";
import BookDetailPage from "./pages/BookDetailPage";
import SearchPage from "./pages/SearchPage";

function Router() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          {/** PRIVATE ROUTES*/}
          <PrivateRoute path="/admin/add" exact component={AdminAddBookPage} />
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
    </BrowserRouter>
  );
}

export default Router;
