import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import AuthService from "../services/AuthService";

class Navbar extends Component {
  componentDidMount() {}

  render() {
    return (
      <div
        uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
        className="u"
      >
        <div className="uk-navbar-container uk-background-secondary uk-box-shadow-medium">
          <nav className="uk-container" uk-navbar="true">
            <div class="uk-navbar-left">
              <Logo />
              <div class="uk-navbar-item uk-margin-xlarge-left">
                <div>
                  <Link
                    to="/browse"
                    class="uk-h4"
                    style={{ textDecoration: "none", color: "#9e9e9e" }}
                  >
                    Browse
                  </Link>
                </div>
              </div>
            </div>

            {/* {this.props.searchBar && (
              <div className="uk-navbar-right">
                <div className="uk-navbar-item">
                  <form className="uk-search uk-search-navbar">
                    <span uk-search-icon="true"></span>
                    <input
                      className="uk-search-input"
                      type="search"
                      placeholder="Search..."
                    />
                  </form>
                </div>
              </div>
            )} */}
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
  searchBar: true,
};

export default Navbar;
