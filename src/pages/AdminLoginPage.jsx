import React from "react";
import { Link, Redirect } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import AuthService from "../services/AuthService";
import Button from "../components/Button";
import LoginForm from "../forms/LoginForm";

class AdminLoginPage extends React.Component {
  state = {
    RedirectTo: "",
  };

  componentDidMount() {
    // trackPromise(/* service call */);
    if (AuthService.isLoggedIn) this.setState({ RedirectTo: "/" });
  }

  handleLogin = ({ username, password }) => {
    let user = AuthService.login(username, password);
    if (user) this.props.history.push("/");
  };

  render() {
    if (this.state.RedirectTo) return <Redirect to={this.RedirectTo} />;

    return (
      <React.Fragment>
        <div
          className="uk-flex uk-flex-center uk-flex-middle uk-flex-column"
          uk-height-viewport="true"
        >
          <div style={styles.container} className="uk-box-shadow-small">
            <h2 className="uk-text-center">Admin</h2>
            <div style={styles.form}>
              <LoginForm onSubmit={this.handleLogin} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "25px",
  },
  form: {
    width: "400px",
  },
};

export default AdminLoginPage;
