// import "../register/Register.css";
// import { getBsProps } from "react-bootstrap/lib/utils/bootstrapUtils";
// import { connect } from "react-redux";
// import { register, login, clearError } from "../../../store/actions";
// import { withRouter } from "react-router-dom";
// import firebase from 'firebase';
import React, { useState, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import "./VehicleLoginForm.scss";
import {
  onboardingReducer,
  initialState
} from "../../../store/reducers/onboarding";
import { ReactComponent as BackArrow } from "../../../assets/img/back.svg";

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

const VehicleInfo = props => {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);
  const [auto, setAuto] = useState({
    classType: {
      vehicleClass: ""
    }
  });

  // const handleOptionChange = e => {
  //   setAuto({ ...auto, [auto.rvInfo.vehicleClass]: e.target.value });
  // };

  const handleRadio = event => {
    //const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setAuto({
      rvInfo: {
        ...auto.rvInfo,
        vehicleClass: event.target.value
      }
    });
  };

  useEffect(() => {}, []);
  const handleChange = e => {
    setAuto({ ...auto, [e.target.name]: e.target.value });
  };
  console.log(props.firstName);
  return (
    <div className="register-wrapper">
      <Header className="rv-way-header">
        <Text className="rv-way-header-text">RV WAY</Text>
      </Header>

      <div className="register-main">
        <form className="register-main-form">
          <div className="go-back-div">
            <a className="go-back" href="/personal">
              <BackArrow />
              <span className="LoginFormBackArrow" id="routing">
                Back
              </span>
            </a>
          </div>
          <div className="greeting">
            <h4>
              <b>Its great to meet you, {props.firstName}!</b>
            </h4>

            <h4>Let's talk about your vehicle...</h4>
          </div>

          <div className="Vehicle-Info-Wrapper">
            <div className="Vehicle-Name">
              <p>Vehicle Name</p>
              <input
                className="vehicleRegisterInput"
                type="string"
                name="vehicleName"
                value={props.vehicleName}
                placeholder=""
              />
            </div>

            <h6 className="VDLabel">
              <b>Vehicle Dimensions</b>
            </h6>

            <div className="Vehicle-Info">
              <div className="Vehicle-Info-Size-1st">
                <div className="VDMeasurements">
                  <p>Height</p>
                  <p>Width</p>
                </div>

                <div className="registerInputBoxes-Wrapper1">
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="100"
                    name="heightFeet"
                    value={props.heightFeet}
                    placeholder=""
                  />
                  <p className="inputLabels">ft.</p>
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="11"
                    name="heightInches"
                    value={props.heightInches}
                    placeholder=""
                  />
                  <p className="inputLabels">in.</p>
                </div>
                <div className="registerInputBoxes-Wrapper2">
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="100"
                    name="widthFeet"
                    value={props.widthFeet}
                    placeholder=""
                  />
                  <p className="inputLabels">ft.</p>
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="11"
                    name="widthInches"
                    value={props.widthInches}
                    placeholder=""
                  />
                  <p className="inputLabels">in.</p>
                </div>
              </div>

              <div className="Vehicle-Info-Size-2nd">
                <div className="VDMeasurements">
                  <p>Length</p>
                  <p>Weight</p>
                </div>

                <div className="registerInputBoxes-Wrapper3">
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="100"
                    name="lengthFeet"
                    value={props.lengthFeet}
                    placeholder=""
                  />
                  <p className="inputLabels">ft.</p>
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="11"
                    name="lengthInches"
                    value={props.lengthInches}
                    placeholder=""
                  />
                  <p className="inputLabels">in.</p>
                </div>

                <div className="registerInputBoxes-Wrapper4">
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    name="weightPounds"
                    value={props.weightPounds}
                    placeholder=""
                  />
                  <p className="inputLabels">lbs.</p>
                </div>
              </div>

              <div className="Vehicle-Info-Size-3rd">
                <div className="axle">
                  <p>Axle Count</p>
                  <input
                    className="registerInputBoxes"
                    type="number"
                    min="0"
                    max="8"
                    name="axleCount"
                    value={props.axleCount}
                    placeholder=""
                  />
                </div>
                <div className="tires">
                  <label className="tiresLabel">
                    <p className="check">Tires</p>
                    <input className="registerCheckbox" type="checkbox" />I have
                    a dual wheel vehicle
                  </label>
                </div>
              </div>

              <p className="classType">RV Type</p>
              <div className="Vehicle-Info-Size-4th">
                <label>
                  <input
                    type="radio"
                    value="ClassA"
                    checked={auto.classType.vehicleClass === "ClassA"}
                    onChange={handleRadio}
                  />
                  Class A
                </label>
                <label>
                  <input
                    className="label"
                    type="radio"
                    value="ClassB"
                    checked={auto.classType.vehicleClass === "ClassB"}
                    onChange={handleRadio}
                  />
                  Class B
                </label>
                <label>
                  <input
                    className="label"
                    type="radio"
                    value="ClassC"
                    checked={auto.classType.vehicleClass === "ClassC"}
                    onChange={handleRadio}
                  />
                  Class C
                </label>
                <label>
                  <input
                    type="radio"
                    value="5thWheel"
                    checked={auto.classType.vehicleClass === "5thWheel"}
                    onChange={handleRadio}
                  />
                  5th wheel
                </label>
                <label>
                  <input
                    className="label1"
                    type="radio"
                    value="PullBehind"
                    checked={auto.classType.vehicleClass === "PullBehind"}
                    onChange={handleRadio}
                  />
                  Pull behind
                </label>
              </div>

              <button
                className="register-lets-go-button"
                variant="warning"
                type="submit"
              >
                Add to My Vehicles
              </button>
              <a id="sign-in" href="/routingPref">
                Skip this step
              </a>
            </div>
          </div>
          {/* Vehicle Info ENDS here */}
        </form>
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log(state, 'rvInfo');
//   return {
//     rvInfo: state.rvInfo
//   }
// };

// export default connect(mapStateToProps, {})(VehicleInfo);

export default VehicleInfo;
