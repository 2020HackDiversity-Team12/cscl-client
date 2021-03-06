import React from "react";
import Button from "../components/Button";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form class="uk-form-stacked">
        <div className="uk-margin uk-width-1-1@s">
          <label className="uk-form-label" for="username">
            <span className="uk-text-capitalize">username</span>
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-border-rounded"
              id="form-stacked-text"
              type="text"
              placeholder="johndoe"
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="uk-margin uk-width-1-1@s">
          <label className="uk-form-label" for="password">
            <span className="uk-text-capitalize">password</span>
          </label>
          <div className="uk-form-controls">
            <input
              class="uk-input"
              id="form-stacked-text"
              type="password"
              placeholder="*****"
              onChange={this.handlePasswordChange}
            />
          </div>
        </div>
        <div class="uk-margin-small uk-width-1-1@s uk-text-align uk-flex uk-flex-center">
          <Button
            className="uk-button uk-button-default"
            onClick={(e) => {
              e.preventDefault();
              this.props.onSubmit(this.state.username, this.state.password);
            }}
          >
            login
          </Button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
