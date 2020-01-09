import React, { useState } from "react";
import "./PersonalInfoForm.css"
import styled from 'styled-components';

const Header = styled.div`
height: 80px;
  width: auto
  background: #2A2E43;
`
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
`

const PersonalInfoForm = (props) => {
  const [user, setUser] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      username: '',
      age: ''
      }
  });
    
    
    //Handles inputs
    const handleChange = e => {
      setUser({
        personalInfo: {
          ...user.personalInfo,
          [e.target.name]: e.target.value,
        }
      });
    };
    
    // On submit will push to next onboarding component
    const submitForm = (e) => {
      e.preventDefault()
      props.history.push('/vehicle');
    };
    console.log("hello", submitForm);
    
    
    
    return (
      <div className="register-wrapper">
        <Header className="rv-way-header">
          <Text className="rv-way-header-text">RV WAY</Text>
        </Header>
        <div className="register-main">
              <form className="personal-main-form" onSubmit={submitForm}>
                <div className="register-header">
                  <h2 className="register-welcome-home">Welcome to RV Way!</h2>
                  <h6 className="register-lets-get-you-settled">Tell us about yourself...</h6>
                </div>

                <div className="register-input-and-button">

                <label className="register-main-form-label">First Name</label>

                  <input
                    className="register-main-form-input"
                    name="firstName"
                    type="text"
                    value={user.personalInfo.firstName}
                    onChange={handleChange}/>

                <label className="register-main-form-label">Last Name</label>

                <input
                className="register-main-form-input"
                name="lastName"
                type="text"
                value={user.personalInfo.lastName}
                onChange={handleChange}/>

                <label className="register-main-form-label">Username</label>

                <input
                className="register-main-form-input"
                // id = "register-main-form-input"
                name="username"
                type="text"
                value={user.personalInfo.username}
                onChange={handleChange}
                />       

                <label className="register-main-form-label">Age</label>

                  <input
                    className="register-main-age-input"
                    name="age"
                    type="number"
                    value={user.personalInfo.age}
                    onChange={handleChange}/>         


                  <button className="register-lets-go-button" variant="warning" type="submit" >
                    Onward!
                </button>
                
                  <div className="already-have-an-account">
                    <a id="sign-in" href="/vehicle">Skip this step</a>
                  </div>
                </div>
              </form>
        </div>
      </div>

)
};

export default PersonalInfoForm;















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