import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function PrivateRoute({ path, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        //  not logged in so redirect to login page
        if (!AuthService.isLoggedIn) return <Redirect to="/login" />;

        // authorised so return component
        return <Component />;
      }}
    />
  );
}
