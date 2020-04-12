import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

class Navbar extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="uk-navbar-container">
        <nav className="uk-container uk-margin" uk-navbar="true">
          <div class="uk-navbar-left">
            <Logo />
            <div class="uk-navbar-item uk-margin-xlarge-left">
              <div>
                <Link to="">Browse</Link>
              </div>
            </div>
          </div>

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
            {/* <ul class="uk-navbar-nav">
              <div className="uk-navbar-item">
                &nbsp;
                <a href="#">Admin</a>
                <div
                  class="uk-navbar-dropdown"
                  uk-dropdown="animation:uk-animation-slide-bottom;"
                  pos="bottom-justify"
                  duration="300"
                  mode="click"
                  align="left"
                  dropbar-mode="slide"
                >
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
