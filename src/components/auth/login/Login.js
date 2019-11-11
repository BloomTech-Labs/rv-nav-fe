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
        email: "",
        password: "",
        errors: {
          email: "",
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
          email: "",
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

  unmaskPassword() {
    var passwordInput = document.querySelector('#password-input');
    var passwordStatus = document.querySelector('.password-mask');
    // if (document.querySelector('#password-eye')) {
    passwordStatus.backgroundImage = 'none';
    // }
    if (passwordStatus && passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordStatus.classList.add('password-eye-off')
      passwordStatus.classList.remove('password-eye')
    }
    else {
      passwordInput.type = 'password';
      passwordStatus.classList.remove('password-eye-off')
      passwordStatus.classList.add('password-eye')
    }
  }

  render() {
    const { errors } = this.state.credentials;
    const { loading } = this.state.loading;
    // const isEnabled = this.state.credentials.username.length >= 5 && this.state.credentials.password.length >= 8;
    return (
      <div className="login-wrapper">
        <div className="login-main">
          {loading === true ? <p className="login-auth-loading">Let the adventure begin...</p> :

            <form class="login-main-form" onSubmit={this.loginSubmit}>
              <div className="login-header">
                <h2 className="login-welcome-back">Welcome Back!</h2>
                <h4 className="its-great-to-see-you-again">It's great to see you again</h4>
              </div>
              <div className="login-social-media">
                <button id="google"></button>
                <button id="facebook"></button>
              </div>
              <div className="or">
                <span>or</span>
              </div>
              {this.props.error === "Invalid username or password" ? (
                <p className="login-main-form-error">Invalid Email or Password</p>
              ) : null}
              <div className="login-input-and-button">
                <label class="login-main-form-label">Email</label>
                <input
                  class="login-main-form-input"
                  type="string"
                  name="email"
                  // placeholder=""
                  value={this.state.credentials.email}
                  onChange={this.handleChange}
                  required
                ></input>
                {errors.email.length > 0 && (
                  <p className="login-main-form-error">{errors.email}</p>
                )}
                <a className="password-mask" onClick={this.unmaskPassword}>MASK</a>
                <label class="login-main-form-label" id="password">Password</label>
                <input
                  class="login-main-form-input"
                  type="password"
                  id="password-input"
                  name="password"
                  // placeholder=""
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                  required
                ></input>
                {errors.password.length > 0 && (
                  <p className="login-main-form-error">{errors.password}</p>
                )}

                <button className="login-lets-go-button" variant="warning" type="submit">
                  Let's Go
                </button>
                <div className="need-account">
                  <span>Already have an account? <a id="sign-up" href="/Register">Sign Up</a></span>
                </div>
              </div>
            </form>

          }
        </div>
      </div>);
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
