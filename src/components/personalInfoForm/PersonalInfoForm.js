import React, { useState, useEffect } from "react";
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


function validate(username) {
  return {
    username: username === ''
  };
}

class PersonalInfoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      age: '',
      touched: {
        username: false
      },
    };
  }

  handleChange = evt => {
    this.setState({ username: evt.target.value });
  };


  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { username } = this.state;
    alert(`Signed up with username: ${username}`);
  };

  canBeSubmitted() {
    const errors = validate(this.state.username);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false
    };

      return (
              <div className="register-wrapper">
        <Header className="rv-way-header">
          <Text className="rv-way-header-text">RV WAY</Text>
        </Header>
        <div className="register-main">
              <form className="personal-main-form">
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
                    value={this.state.firstName}
                    onChange={this.handleChange}/>

                <label className="register-main-form-label">Last Name</label>

                <input
                className="register-main-form-input"
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}/>

                <label className="register-main-form-label">Username</label>

                <input
                className={shouldMarkError('username') ? "error" : ""} 
                id = "register-main-form-input"
                onBlur={this.handleBlur('username')}
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                />       

                <label className="register-main-form-label">Age</label>

                  <input
                    className="register-main-age-input"
                    name="age"
                    type="number"
                    value={this.state.age}
                    onChange={this.handleChange}/>         


                  <button className="register-lets-go-button" variant="warning" type="submit">
                    Onward!
                </button>
                
                  <div className="already-have-an-account">
                    <a id="sign-in" href="/login">Skip this step</a>
                  </div>
                </div>
              </form>
        </div>
      </div>

        ) 
    }
  };

export default PersonalInfoForm;




















// import React, { useState, useEffect } from "react";
// import { withFormik, Field, Form } from "formik";
// import { NavLink } from "react-router-dom";
// import * as Yup from "yup";
// import styled from 'styled-components';

// const Header = styled.div`
//   height: 80px;
//   width: auto
//   background: #2A2E43;
// `
// const Text = styled.span`
//   position: absolute;
//   left: 0.74%;
//   // right: 90.31%;
//   top: 1.25%;
//   bottom: 12.5%;
//   color: rgba(53, 195, 226, 0.95);
//   font-size: 36px;
//   font-weight: bold;
//   font-family: Heebo;
//   height: 60px;
// `

// const PersonalInformation = ({ errors, touched, status }) => {
//     const [info, setInfo] = useState([]);
    
//     useEffect(() => {
//       if (status) {
//         setInfo([...info, status]);
//       }
//     }, [status, info]);

//     return (
//         <div className="register-wrapper">
//         <Header className="rv-way-header">
//           <Text className="rv-way-header-text">RV WAY</Text>
//         </Header>
//     <div className="register-main">
//         <Form className="personal-main-form">
//         <div className="register-header">
//             <h2 className="register-welcome-home">Welcome to RV Way!</h2>
//             <h6 className="register-lets-get-you-settled">Tell us about yourself...</h6>
//         </div>

//           <div className="register-input-and-button">
//          <label className="register-main-form-label">
//             First Name
//          <Field className="register-main-form-input" type="text" name="firstName" />
//          {touched.firstName && errors.firstName && (<p className="error">{errors.firstName}</p>)}
//          </label>

//          <label className="register-main-form-label">
//              Last Name
//          <Field className="register-main-form-input" type="text" name="lastName"/>
//          {touched.lastName && errors.lastName && (<p className="error">{errors.lastName}</p>)}
//          </label>

//          <label className="register-main-form-label">
//              Username
//          <Field className="register-main-form-input" type="text" name="username"/>
//          {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
//          </label>

//          <label className="register-main-form-input">
//              Age
//          <Field className="register-main-age-input" type="text" name="age"/>
//          {touched.age && errors.age && (<p className="error">{errors.age}</p>)}
//          </label>

//          <button className="register-lets-go-button" type="submit">Onward!</button>

//           <div className="already-have-an-account">
//          <h4><NavLink to={`/vehicleinfo`}>Skip this step</NavLink></h4> 
//           </div>
//         </div>
//         </Form>
//     </div>
//     </div>
//     )
// };

// const FormikPersonalInformation = withFormik({
//     mapPropsToValues({firstName, lastName, username, age}) {
//       return {
//         firstName: firstName || '',
//         lastName: lastName || '',
//         username: username || '',
//         age: age || ''
//       };
//     },
//     validationSchema: Yup.object().shape({
//       firstName: Yup.string().required('Please enter your first name'),
//       lastName: Yup.string().required('Please enter your last name'),
//       username: Yup.string().required('Please enter your username'),
//       age: Yup.string().required('Please enter your age')

//     }),
//     handleSubmit({firstName, lastName, username, age}, {setStatus}){
//      setStatus({firstName, lastName, username, age})
//     } 
//   })(PersonalInformation);


// export default FormikPersonalInformation;


