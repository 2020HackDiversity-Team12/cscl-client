import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function PrivateRoute(props) {
  const { path, component: Component } = props;
  return (
    <Route
      {...props}
      path={path}
      render={(props) => {
        //  not logged in so redirect to login page
        if (!AuthService.isLoggedIn) return <Redirect to="/auth" />;

        // authorised so return component
        return <Component />;
      }}
    />
  );
}
