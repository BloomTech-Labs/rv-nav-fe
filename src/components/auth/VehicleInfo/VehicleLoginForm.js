import React, { useState, useEffect } from "react";
import "../register/Register.css";
import styled from 'styled-components';
import "./VehicleLoginForm.scss";
import { ReactComponent as BackArrow } from '../../../assets/img/back.svg';
// import { getBsProps } from "react-bootstrap/lib/utils/bootstrapUtils";
// import { connect } from "react-redux";
// import { register, login, clearError } from "../../../store/actions";
// import { withRouter } from "react-router-dom";
// import firebase from 'firebase';

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
const VehicleInfo = () => {
    const [auto,setAuto] = useState({});

    useEffect(() =>{
    },[])
    const handleChange = e =>{
        setAuto({...auto, [e.target.name]: e.target.value})
    }

    return (
        <div className="register-wrapper">
          <Header className="rv-way-header">
            <Text className="rv-way-header-text">RV WAY</Text>
          </Header>
        <div className="register-main">

          <form className="register-main-form">
          <div className="go-back-div">
            <BackArrow />
            <span className='LoginFormBackArrow' id="routing">Back</span>
          </div>
          
          <div className="greeting"> 
            <h4><b>Its great to meet you, namehgjf!</b></h4>
            <h4>Let's talk about your vehicle...</h4>
          </div>
          
          <div className="Vehicle-Info-Wrapper">
              <div className="Vehicle-Name">
                <p>Vehicle Name</p>
                <input 
                  className="vehicleRegisterInput"
                  type="string" 
                  name="name" 
                  placeholder="The Mystery Machine"
                />
              </div>

              <h6 className="VDLabel"><b>Vehicle Dimensions</b></h6>

              <div className="Vehicle-Info">
                <div className="Vehicle-Info-Size-1st">
                  
                  <div className="VDMeasurements">
                  <p>Height</p>
                  <p>Width</p>  
                  </div>
                  
                  <div className="registerInputBoxes-Wrapper">
                    <input 
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      max="100"
                      name="heightFeet"
                      placeholder=""
                    />
                    <input 
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      max="11"
                      name="heightInches"
                      placeholder=""
                    />
                  </div>
                    
                  <div className="registerInputBoxes-Wrapper">
                    <input 
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      max="100"
                      name="widthFeet"
                      placeholder=""
                    />
                    <input 
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      max="11"
                      name="widthInches"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="Vehicle-Info-Size-2nd">
                  <div className="VDMeasurements">
                    <p>Length</p>
                    <p>Weight</p>  
                  </div>

                  <div className="registerInputBoxes-Wrapper">
                    <input 
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      max="100"
                      name="lengthFeet"
                      placeholder=""
                    />
                    <p>ft.</p>
                    <input 
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      max="11"
                      name="lengthInches"
                      placeholder=""
                    />
                    <p>in.</p>
                  </div>

                  <div className="registerInputBoxes-Wrapper">
                    <input
                      className="registerInputBoxes"
                      type="number"
                      min="0"
                      name="weightPounds"
                      placeholder=""
                    />
                    <p>lbs.</p>
                  </div>
                </div>
                
                <div className="Vehicle-Info-Size-3rd">
                  <p>Axle Count</p>
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="8"
                    name="axleCount"
                    placeholder=""
                  />

                  <p>Tires</p>
                  <input
                    className="registerCheckbox"
                    type="checkbox"
                  />
                  <label>I have a dual wheel vehicle</label>
                </div>

                <div className="Vehicle-Info-Size-4th">
                  <p>RV Type</p>
                  <label><input type="radio" value="ClassA"/>Class A</label>
                  <label><input type="radio" value="ClassB"/>Class B</label>
                  <label><input type="radio" value="ClassC"/>Class C</label>
                  <label><input type="radio" value="5thWheel"/>5th wheel</label>
                  <label><input type="radio" value="PullBehind"/>Pull behind</label>
                </div>

                <button className="register-lets-go-button" variant="warning" type="submit">
                  Add to My Vehicles
                </button>
                <a id="sign-in" href="/preferences">Skip this step</a>
              </div>            
            </div>
            {/* Vehicle Info ENDS here */}
            </form>
        </div>
      </div>
    )}


export default VehicleInfo; 
