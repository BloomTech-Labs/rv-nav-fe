import React, { Component } from "react";
import { connect } from "react-redux";
import { register, login, clearError } from "../../../store/actions";
import { withRouter } from "react-router-dom";
import "./Register.css"

/* eslint-disable no-useless-escape */
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      credentials: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        errors: {
          username: "",
          first_name: "",
          last_name: "",
          password: "",
          email: ""
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
          value.length < 5 ? "Username must be at least 5 characters long" : "";
        break;

      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;

      case "first_name":
        errors.first_name =
          value.length < 0 ? "First name must be 2 characters long" : "";
        break;

      case "last_name":
        errors.last_name =
          value.length < 0 ? "Last name must be 2 characters long" : "";
        break;

      case "password":
        errors.password =
          value.length < 8 ? "Password must be at least 8 characters long" : "";
        break;
      default:
        break;
    }

    this.setState({
      credentials: { ...this.state.credentials, errors, [name]: value }
    });
  };

  registerSubmit = e => {
    e.preventDefault();
    //Google analytics tracking
    window.gtag("event", "register", {
      event_category: "access",
      event_label: "register"
    });
    if (validateForm(this.state.credentials.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    this.setState({ loading: true });
    this.props
      .register({
        username: this.state.credentials.username,
        password: this.state.credentials.password,
        email: this.state.credentials.email,
        first_name: this.state.credentials.first_name,
        last_name: this.state.credentials.last_name
      })
      .then(res => {
        if (res) {
          this.props
            .login({
              username: this.state.credentials.username,
              password: this.state.credentials.password
            })
            .then(res => {
              if (res) {
                this.setState({
                  // credentials: {
                  //   username: "",
                  //   password: "",
                  //   first_name: "",
                  //   last_name: ""
                  // },
                  // loading: false
                });
                this.props.history.push("/map");
              }
            });
        }
      })
      .catch(err => {
        setTimeout(function () {
          return this.props.clearError();
        }, 3000);
      });
  };

  unmaskPassword() {
    var passwordInput = document.querySelector('#password-input');
    var passwordStatus = document.querySelector('#password-eye');
    document.querySelector('#password-eye').style.background = "url('../../../assets/img/eye.svg')";

    if (passwordStatus && passwordInput.type == 'password') {
      passwordInput.type = 'text';
      passwordStatus.style.background = "url('../../../assets/img/eye-off.svg')";
      // passwordStatus.style.backgroundColor = 'black';
      // passwordStatus.style.color = 'red';

    }
    else {
      passwordInput.type = 'password';
      passwordStatus.style.backgroundImage = "url('../../../assets/img/eye-off.svg')";
      passwordStatus.style.backgroundColor = 'black';
      // passwordStatus.style.color = 'blue';

    }
  }

  // openNav = () => {
  //   if (
  //     document.querySelector("#password-eye")
  //   ) {
  //     document.querySelector('#password-eye').innerHTML = 'OKOKOK'
  //     console.log('it happended')
  //     document.querySelector("#password-eye").style.color = "red";

  //   }
  // };

  render() {
    const { errors } = this.state.credentials;
    // const isEnabled = this.state.credentials.username.length >= 5 && this.state.credentials.email.length > 2 && this.state.credentials.password.length >= 8;
    return (
      <div className="register-main">
        {this.state.loading === true ? (
          <p className="register-auth-loading">Loading...</p>
        ) : (
            <form className="register-main-form">
              <div className="register-header">
                <h2 className="register-welcome-home">Welcome Home!</h2>
                <h4 className="register-lets-get-you-settled">Lets get you settled</h4>
                <h6 className="register-sign-up-with-social-media">Signup with social media</h6>
              </div>
              <div className="register-social-media">
                <button id="google"></button>
                <button id="facebook"></button>
              </div>
              <div className="or">
                <span>or</span>
              </div>
              <div className="register-input-and-button">
                <label className="register-main-form-label">Email</label>
                <input
                  className="register-main-form-input"
                  name="email"
                  // placeholder="Email"
                  type="email"
                  value={this.state.credentials.email}
                  onChange={this.handleChange}
                  noValidate
                ></input>
                {errors.email.length > 0 && (
                  <p className="register-main-form-error">{errors.email}</p>
                )}
                {this.props.error === "Email already taken" && (
                  <p className="register-main-form-error">Email already taken</p>
                )}

                <label className="register-main-form-label" id="password">Password</label>
                <input
                  className="register-main-form-input"
                  id="password-input"
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                  noValidate
                ></input>
                <a id="password-eye" onClick={this.unmaskPassword}>PPPPP</a>
                {errors.password.length > 0 && (
                  <p className="register-main-form-error">{errors.password}</p>
                )}

                <label className="register-main-form-label" id="confirm-password">Confirm Password</label>
                <input
                  className="register-main-form-input"
                  id="confirm-password-input"
                  type="password"
                  name="confirmPassword"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                  noValidate
                ></input>
                {errors.password.length > 0 && (
                  <p className="register-main-form-error">{errors.password}</p>
                )}

                <button
                  className="register-lets-go-button"
                  variant="warning"
                  onClick={this.registerSubmit}
                  type="submit"
                >
                  Let's Go
                </button>
                <div className="already-have-an-account">
                  <span>Already have an account? <a id="sign-in">Sign In</a></span>
                </div>
              </div>
            </form>
          )}
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
    { register, login, clearError }
  )(RegisterForm)
);
