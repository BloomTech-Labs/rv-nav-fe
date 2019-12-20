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
const PersonalInfoForm = () => {
  const [info, setInfo] = useState({});

    useEffect(() => {
    },[])
    
    const handleChange = e =>{
        setInfo({...info, [e.target.name]: e.target.value})
    }
    return(
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
                    noValidate />

                <label className="register-main-form-label">Last Name</label>

                <input
                className="register-main-form-input"
                name="lastName"
                type="text"
                noValidate />

                <label className="register-main-form-label">Username</label>

                <input
                className="register-main-form-input"
                name="username"
                type="text"
                noValidate />       

                <label className="register-main-form-label">Age</label>

                  <input
                    className="register-main-age-input"
                    name="age"
                    type="text"
                    noValidate />         


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
            )}

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

//     return(
//           <div className="info-wrapper">
//         <Header className="rv-way-header">
//           <Text className="rv-way-header-text">RV WAY</Text>
//         </Header>
//     <div className="personal-main">
//         <Form className="main-form">
//             <h2 className="personal-welcome">Welcome to RV Way!</h2>
//             <h4 className="personal-tell-us">Tell us about yourself...</h4>
        
//         <label className="personal-main-form-label">
//             First Name
//         <Field className="personal-field-and-button" type="text" name="firstName" />
//         {touched.firstName && errors.firstName && (<p className="error">{errors.firstName}</p>)}
//         </label>

//         <label className="personal-main-form-label">
//             Last Name
//         <Field className="personal-field-and-button" type="text" name="lastName"/>
//         {touched.lastName && errors.lastName && (<p className="error">{errors.lastName}</p>)}
//         </label>

//         <label className="personal-main-form-label">
//             Username
//         <Field className="personal-field-and-button" type="text" name="username"/>
//         {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
//         </label>

//         <label className="personal-main-form-label">
//             Age
//         <Field className="personal-field-age" type="text" name="age"/>
//         {touched.age && errors.age && (<p className="error">{errors.age}</p>)}
//         </label>

//         <button className="personal-field-and-button" type="submit">Onward!</button>

//         <h4><NavLink to={`/vehicleinfo`}>Skip this step</NavLink></h4>

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


