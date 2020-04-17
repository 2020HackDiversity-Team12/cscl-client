import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import AuthService from "../services/AuthService";

export default function (props) {
  return (
    <div className="uk-navbar-container topbar">
      <nav className="uk-container" uk-navbar="true">
        <div className="uk-navbar-left uk-link-reset">
          <div className="uk-navbar-item topbar-item">
            <span
              uk-icon="icon:lock;ratio:0.6"
              style={{ color: "#000" }}
            ></span>
            <Link to="/auth">Admin</Link>
          </div>
        </div>
        {AuthService.isLoggedIn && (
          <div className="uk-navbar-right uk-link-reset">
            <div className="uk-navbar-item topbar-item">
              <span
                uk-icon="icon:plus;ratio:0.6"
                style={{ color: "#000" }}
              ></span>
              <Link to="/admin/add">Add</Link>
            </div>
            <div className="uk-navbar-item topbar-item">
              <span
                uk-icon="icon:sign-out;ratio:0.7"
                style={{ color: "#000" }}
              ></span>
              <button
                class="uk-button uk-button-text uk-text-capitalize"
                onClick={props.onLogout}
              >
                logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
