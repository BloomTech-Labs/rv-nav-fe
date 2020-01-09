import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { register, login, clearError } from "../../../store/actions";
import { withRouter } from "react-router-dom";
// import "../register/Register.css"
import "../routingPref/Routing-Pref.css"
import styled from 'styled-components';
import OnboardLoad from '../loading/LoadingPage';


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


const RoutingPref = (props) => {
    const [loading,setLoading] = useState(false);
    const [dirtRoad, setRoad] = React.useState(false)
    const [steep, setSteep] = React.useState(false)
    const [holes, setHoles] = React.useState(false)
    
  const handleRoads = () => setRoad(!dirtRoad)
  const handleSteep = () => setSteep(!steep)
  const handleHoles = () => setHoles(!holes)

    useEffect(() =>{
        
    },[])
    console.log("props",props)



    let regSubmit = event => {
      event.preventDefault();
      //Google analytics tracking
      window.gtag("event", "register", {
        event_category: "access",
        event_label: "register"
      });
      setLoading(true);
      if(setLoading === true){
        // make loading page its own component render on loading true
        return <OnboardLoad/>
      }
        props.register(dirtRoad,steep,holes)
        .then(res => {
          setLoading(false);
          // this.setState({
          //   email: "",
          //   password: ""
          // });
          if (res) {
            props.history.push("/map");
          }
        }) //put register errors
        .catch(err => {
          setLoading(false);
          console.log("login err", err);
        });
    };


      return(
        <div className="register-wrapper">
        <Header className="rv-way-header">
          <Text className="rv-way-header-text">RV WAY</Text>
        </Header>
        <div className="register-main">
         {/* {newUser.loading === false ?
            (
            <p className="register-auth-loading">Loading...</p>
          ) : ( */ }
        
              <form className="register-main-form">
                <div className="go-back-div">
                <a className="go-back" href="/vehicle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.241 18.52L4.36195 12.64C4.25139 12.5733 4.16 12.4791 4.09657 12.3666C4.03314 12.2542 3.99989 12.1272 4.00001 11.998C3.99924 11.8654 4.03373 11.7349 4.09999 11.62C4.13421 11.5572 4.17725 11.4996 4.22792 11.449C4.25232 11.4246 4.27839 11.4019 4.30592 11.381L10.2379 5.44904C10.3787 5.30853 10.5695 5.22961 10.7684 5.22961C10.9674 5.22961 11.1582 5.30853 11.299 5.44904C11.4395 5.58984 11.5184 5.78063 11.5184 5.97954C11.5184 6.17845 11.4395 6.36924 11.299 6.51004L6.55995 11.248H19.2479C19.3465 11.248 19.4441 11.2675 19.5352 11.3052C19.6262 11.343 19.709 11.3983 19.7787 11.4681C19.8484 11.5378 19.9035 11.6206 19.9412 11.7117C19.9788 11.8028 19.9981 11.9005 19.9979 11.999C19.9979 12.198 19.919 12.3887 19.7783 12.5294C19.6377 12.67 19.4468 12.749 19.2479 12.749H6.5879L11.299 17.46C11.4395 17.6008 11.5184 17.7916 11.5184 17.9905C11.5184 18.1895 11.4395 18.3802 11.299 18.521C11.2292 18.5907 11.1464 18.6459 11.0553 18.6835C10.9642 18.721 10.8665 18.7403 10.768 18.74C10.5701 18.7392 10.3807 18.6601 10.241 18.52Z" fill="#00B2D9"/>
</svg>  <span className="go-back">Back</span></a>
                </div>
                <div className="register-header">
                  <h2 className="register-welcome-home">Tell us about your routing preferences!</h2>
                </div>
                <div className="avoid">
                  <span>I want to avoid</span>
                </div>
                {/* <div className="register-social-media">
                    
                {newUser.isSignedIn ?
                            (
                              <div>
                                {newUser.isSignedIn ? (
                          

                          <>
                            <h6>Welcome  {firebase.auth().currentUser.displayName}</h6>
                            <button onClick={() => firebase.auth().signOut()}>Logout</button>
                          </>
                          
                        ) : localStorage.getItem('firebaseui::rememberedAccounts') ? localStorage.removeItem('firebaseui::rememberedAccounts') : null}
                      </div>
                    ) :
                    //was uiConfig={this.uiConfig}
                    (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />)}
                </div> */}

                <div className="register-input-and-button">

                 <div>
                 <label for="DirtRoads" className="register-main-form-label">
                  <input
                  onClick={handleRoads}
                    name="DirtRoads"
                    id="DirtRoads"
                    type="checkbox"
                    className="checkboxes"
                    dirtRoad={dirtRoad}
                  ></input> 
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-options">Dirt Roads longer than 2 miles</span>
                  </label>
                   </div>   
                  
                  
                  <div>
                    <label for="Steep" className="register-main-form-label">
                   <input
                   onClick={handleSteep}
                    name="SteepGrade"
                    id="Steep"
                    type="checkbox"
                    className="checkboxes"
                    steep={steep}
                  ></input>
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-options">Grades steeper than 10%</span>
                  </label>
                   </div> 
                  

                    <div>
                    <label for="Potholes" className="register-main-form-label">
                   <input
                   onClick={handleHoles}
                    className="checkboxes"
                    name="Potholes"
                    id="Potholes"
                    type="checkbox"
                    holes={holes}
                  ></input>
                  <span className="checkbox-custom"></span>
                   <span className="checkbox-options">Potholes</span>
                   </label>
                   </div> 
                  
                  
                  {/* {errors.email.length > 0 && (
            
                    <p className="register-main-form-error">{errors.email}</p>
                  )}
                  
                  {props.error === "Email already taken" &&
                  
                  (
                    <p className="register-main-form-error">Email already taken</p>
                  )} */}
                
                {/* <span className="password-mask" onClick={handleChange}>MASK</span>
                  <label className="register-main-form-label" id="password">Password</label>
                  <input
                    className="register-main-form-input"
                    id="password-input"
                    type="password"
                    name="password"
                    value={newUser.password}
                    
                    onChange={handleChange}
                    noValidate
                  ></input>
                  {errors.password.length > 0 && (
                    <p className="register-main-form-error">{errors.password}</p>
                  )}
                  <div>
                    <span className="password-mask-confirm" onClick={handleChange}>MASK</span>
                    <label className="register-main-form-label" id="confirm-password">Confirm Password</label>
                    <input
                      className="register-main-form-input"
                      id="confirm-password-input"
                      type="password"
                      name="confirmPassword"
                      value={newUser.confirmPassword}
                      onChange={handleChange}
                    // noValidate
                    ></input> */}
                    {/* {errors.confirmPassword.length > 0 && (
                      <p id="confirm-password-error" className="register-main-form-error">{errors.confirmPassword}</p>
                    )} */}
                  {/* </div> */}
                  <button
                    className="register-lets-go-button"
                    variant="warning"
                    onClick={regSubmit}
                    type="submit"
                  >
                    Add to My Preferences
                    </button>
                  
                  <div className="already-have-an-account">
                    <a id="sign-in" href="/map"><span>Skip this step</span></a>
                  </div>
                </div>
                
              </form>
        </div> 
      </div>
     
    );
    
  }





  const mapStateToProps = state => {
    return { error: state.error };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      {register}
    )(RoutingPref)
  );