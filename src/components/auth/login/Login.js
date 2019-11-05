import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../store/actions";
//import Button from "react-bootstrap/Button"; //! commented out by Noor : "not used in the component"
//import Form from "react-bootstrap/Form"; //! commented out by Noor : "not used in the component"
//import "../Auth.css"; //! commented out by Noor : "not used in the component"
import "./Login.css"

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      credentials: {
        username: "",
        password: "",
        errors: {
          username: "",
          password: ""
        }
      },
      loading: false
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.credentials.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length < 5
            ? "Username must be at least 5 characters long"
            : "";
        break;

      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long"
            : "";
        break;
      default:
        break;
    }

    this.setState({
      credentials: {
        ...this.state.credentials,
        errors,
        [name]: value
      }
    });
  };

  loginSubmit = event => {
    event.preventDefault();
    //Google analytics tracking
    window.gtag("event", "login", {
      event_category: "access",
      event_label: "login"
    });
    this.setState({ loading: true });
    return this.props
      .login(this.state.credentials)
      .then(res => {
        this.setState({ loading: false });
        this.setState({
          username: "",
          password: ""
        });
        if (res) {
          this.props.history.push("/map");
        }
        // if (this.state.username.value == '') {
        //   window.alert('Please enter your username');
        //   this.state.username.focus();
        //   return false;
        // }

        // if (this.state.password.value == '') {
        //   window.alert('Please enter a valid password');
        //   this.state.password.focus();
        //   return false;
        // }
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log("login err", err);
      });
  };

  render() {
    const { errors } = this.state.credentials;
    // const isEnabled = this.state.credentials.username.length >= 5 && this.state.credentials.password.length >= 8;
    return (

      <div>
        {this.state.loading === true ? <p className="login-auth-loading">Loading...</p> :

          <form class="login-main-form" onSubmit={this.loginSubmit}>
            {this.props.error === "Invalid username or password" ? (
              <p className="login-main-form-error">Invalid username or password</p>
            ) : null}
            <div>
              <label class="login-main-form-label">Username</label>
              <input
                class="login-main-form-input"
                type="string"
                name="username"
                placeholder="Username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                required
              ></input>
              {errors.username.length > 0 && (
                <p className="login-main-form-error">{errors.username}</p>
              )}

              <label class="login-main-form-label">Password</label>
              <input
                class="login-main-form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                required
              ></input>
              {errors.password.length > 0 && (
                <p className="login-main-form-error">{errors.password}</p>
              )}

              <button
                class="login-main-form-button"
                variant="warning"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>

        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(LoginForm)
);
