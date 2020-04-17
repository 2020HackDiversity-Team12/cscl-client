import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = { q: "" };

  handleChange = (event) => {
    this.setState({ q: event.target.value });
  };

  handleSubmit = () => {
    this.props.history.push(`/search/${this.state.q}`);
  };

  render() {
    return (
      <div>
        <div
          class="uk-flex uk-flex-center uk-flex-middle uk-flex-column"
          uk-height-viewport="true"
        >
          <Logo size="lg" />
          <h2
            className="uk-text-capitalize uk-margin-remove"
            style={styles.subtitle}
          >
            coffe shop community library
          </h2>

          <form
            className="uk-search uk-search-default uk-width-1-3 uk-margin-medium-top uk-margin-medium-bottom"
            onSubmit={this.handleSubmit}
          >
            <input
              style={styles.search}
              className="uk-search-input uk-width-1-1 uk-border-rounded"
              type="search"
              placeholder="Book Title..."
              value={this.state.q}
              onChange={this.handleChange}
            />
          </form>

          <Link
            to={`/search/${this.state.q}`}
            className="uk-button uk-button-secondary uk-margin"
          >
            search
          </Link>

          <div className="uk-margin-large-top">
            <h5 style={{ textDecoration: "underline" }}>
              <Link to="/browse" className="uk-link-reset">
                Browse
              </Link>
            </h5>
          </div>

          <footer className="uk-margin-large-top">
            <div className="uk-text-medium uk-dark uk-text-medium">
              &copy;2020 Handcrafted By Team12
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomePage;

const styles = {
  search: {
    backgroundColor: "#fff",
    fontSize: "20px",
    padding: "10px",
    height: "60px",
  },
  subtitle: {
    color: "#424242",
  },
};
