import React from "react";
import { Link, Redirect } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import AuthService from "../services/AuthService";
import LoginForm from "../forms/LoginForm";
import Logo from "../components/Logo";

class AdminLoginPage extends React.Component {
  state = {
    RedirectTo: null,
  };

  componentDidMount() {
    // trackPromise(/* service call */);
    if (AuthService.isLoggedIn) this.setState({ RedirectTo: "/admin" });
  }

  handleLogin = (username, password) => {
    let user = AuthService.login(username, password);
    if (user) this.props.history.push("/admin");
    else alert("invalid credentials");
  };

  render() {
    if (this.state.RedirectTo) return <Redirect to={this.state.RedirectTo} />;

    return (
      <React.Fragment>
        <div
          className="uk-background-cover uk-background-blend-overlay"
          uk-height-viewport="offset-bottom: 0"
          style={{
            backgroundImage: "url(/assets/img/background.jpg)",
            ...styles.cover,
          }}
          uk-img="true"
        >
          <div style={styles.container} className="uk-box-shadow-large">
            <div className="uk-text-center uk-margin">
              <Logo size="md" />
              <h4 className="uk-margin-small-top">Admin</h4>
            </div>
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
    backgroundColor: "#f5f5f5",
  },
  form: {
    width: "400px",
  },
  cover: {
    backgroundColor: "#212121",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default AdminLoginPage;
