import React, { useState } from "react";
import "./PersonalInfoForm.css";
import styled from "styled-components";

const Header = styled.div`
height: 80px;
  width: auto
  background: #2A2E43;
`;
const Text = styled.span`
  position: absolute;
  left: 0.74%;
  // right: 90.31%;
  top: 1.25%;
  bottom: 12.5%;
  color: rgba(53, 195, 226, 0.95);
  font-size: 36px;
  font-weight: bold;
  font-family: Heebo;
  height: 60px;
`;

function validate(username) {
  return {
    username: username === ""
  };
}

const PersonalInfoForm = props => {
  const [user, setUser] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      username: "",
      age: "",
      touched: {
        username: false
      }
    }
  });

  const handleChange = evt => {
    setUser({ username: evt.target.value });
  };

  const handleRest = event => {
    setUser({ [event.target.name]: event.target.value });
  };

  //Figured how to get the touched to read
  // const handleBlur = field => evt => {
  //   setUser({
  //     touched: { ...touched, [field]: true },
  //   });
  // }

  // const handleSubmit = evt => {
  //   if (!canBeSubmitted()) {
  //     evt.preventDefault();
  //     return;
  //   }
  //   const { username } = user;
  //   alert(`Signed up with username: ${username}`);
  // };

  const submitForm = e => {
    e.preventDefault();
    props.history.push("/vehicle");
  };
  console.log("hello", submitForm);

  const canBeSubmitted = () => {
    const errors = validate(user.personalInfo.username);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  };

  const errors = validate(user.personalInfo.username);
  const isDisabled = Object.keys(errors).some(x => errors[x]);

  const shouldMarkError = field => {
    const hasError = errors[field];
    const shouldShow = user.personalInfo.touched[field];
    return hasError ? shouldShow : false;
  };

  return (
    <div className="register-wrapper">
      <Header className="rv-way-header">
        <Text className="rv-way-header-text">RV WAY</Text>
      </Header>
      <div className="register-main">
        <form className="personal-main-form" onSubmit={submitForm}>
          <div className="register-header">
            <h2 className="register-welcome-home">Welcome to RV Way!</h2>
            <h6 className="register-lets-get-you-settled">
              Tell us about yourself...
            </h6>
          </div>

          <div className="register-input-and-button">
            <label className="register-main-form-label">First Name</label>

            <input
              className="register-main-form-input"
              name="firstName"
              type="text"
              value={user.firstName}
              onChange={handleRest}
            />

            <label className="register-main-form-label">Last Name</label>

            <input
              className="register-main-form-input"
              name="lastName"
              type="text"
              value={user.lastName}
              onChange={handleRest}
            />

            <label className="register-main-form-label">Username</label>

            <input
              className={shouldMarkError("username") ? "error" : ""}
              id="register-main-form-input"
              // onBlur={handleBlur('username')}
              name="username"
              type="text"
              value={user.username}
              onChange={handleChange}
            />

            <label className="register-main-form-label">Age</label>

            <input
              className="register-main-age-input"
              name="age"
              type="number"
              value={user.age}
              onChange={handleRest}
            />

            <button
              className="register-lets-go-button"
              variant="warning"
              type="submit"
            >
              Onward!
            </button>

            <div className="already-have-an-account">
              <a id="sign-in" href="/vehicle">
                Skip this step
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
