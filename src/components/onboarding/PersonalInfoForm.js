import React, { Component } from "react";
import "./PersonalInfoForm.css";
import styled from "styled-components";
// import { personalInfoAction } from "../../store/actions/OnboardingAction";
// import {
//   onboardingReducer,
//   initialState,
//   actions
// } from "../../store/reducers/onboarding";

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

class PersonalInfoForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange, firstName, lastName, userName, age } = this.props;

    return (
      <div className="register-wrapper">
        <Header className="rv-way-header">
          <Text className="rv-way-header-text">RV WAY</Text>
        </Header>
        <div className="register-main">
          <form className="personal-main-form">
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
                value={firstName}
                onChange={handleChange("firstName")}
              />

              <label className="register-main-form-label">Last Name</label>

              <input
                className="register-main-form-input"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange("lastName")}
              />

              <label className="register-main-form-label">Username</label>

              <input
                className="register-main-form-input"
                name="userName"
                type="text"
                value={userName}
                onChange={handleChange("userName")}
              />

              <label className="register-main-form-label">Age</label>

              <input
                className="register-main-age-input"
                name="age"
                type="number"
                value={age}
                onChange={handleChange("age")}
              />

              <button
                className="register-lets-go-button"
                variant="warning"
                type="submit"
                onClick={this.continue}
              >
                Onward!
              </button>

              <div className="already-have-an-account">
                <a>
                  <span onClick={this.continue}>Skip this step</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalInfoForm;

// const [state, dispatch] = useReducer(onboardingReducer, initialState);

// const nextStep= () => {
//   const {step} = this.state;
//   dispatch({
//     type: step + 1
//   })
// };

// // const prevStep= () => {
// //   const {step} = this.state;
// //   return {...this.state ( step - 1)};
// // };

// // const showStep = () => {
// //   const {step} = this.state;
// //   if(step === 1)
// //   return {...this.state.personalInfo,nextStep()
// // }

//Calling action from reducer to handle change for inputs
// const handleChange = e => {
//   dispatch({
//     type: actions[e.target.name + "Changed"],
//     payload: e.target.value
//   });
// };

// On submit will push to next onboarding component
// const submitForm = e => {
//   e.preventDefault();
//   props.history.push("/vehicle");
// };
// console.log("hello", submitForm);

// Action to hold state and pass to next component
// const handleInfo = info => {
//   dispatch({ type: 'PASS_INFO', info })
// };

// function validate(username) {
//   return {
//     username: username === ''
//   };
// }

// const handleChange = evt => {
//             setUser({ username: evt.target.value });
//           };

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

// const canBeSubmitted = () => {
//   const errors = validate(user.personalInfo.username);
//   const isDisabled = Object.keys(errors).some(x => errors[x]);
//   return !isDisabled;
// }

// const errors = validate(user.personalInfo.touched.username);
// const isDisabled = Object.keys(errors).some(x => errors[x]);

// const shouldMarkError = (field) => {
//   const hasError = errors[field];
//   const shouldShow = user.personalInfo.touched[field];
//   return hasError ? shouldShow : false
// };
