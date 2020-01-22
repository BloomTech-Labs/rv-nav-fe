import React, { Component } from "react";
import PersonalInfo from "./PersonalInfoForm";
import VehicleLoginForm from "./VehicleLoginForm";
import RoutingPref from "./Routing-Pref";
import { connect } from "react-redux";
import { register, login } from "../../store/actions/index";
import { withRouter } from "react-router-dom";
import axios from "axios";

const validateForm = errors => {
  let valid = true;
  return valid;
};

class Main extends Component {
  state = {
    step: 1,

    //step 1
    firstName: "",
    lastName: "",
    userName: "",
    age: "",

    //step: 2
    name: "",
    heightFeet: "",
    heightInches: "",
    widthFeet: "",
    widthInches: "",
    lengthFeet: "",
    lengthInches: "",
    weight: "",
    axel_count: "",
    vehicle_class: "", //controlled input of one letter
    //created_at: '', //check BE for format, generate date with js
    dual_tires: false, //Bool, checkbox
    trailer: false, //Bool, checkbox
    isSignedIn: false,

    //step 3
    DirtRoads: false,
    SteepGrade: false,
    Potholes: false
  };

  //combines feet and inch units into feet only, to be sent to the backend
  combineDistanceUnits = (inchesIn, feetIn) => {
    let inches = inchesIn;
    let feet = feetIn;
    if (feet === "") {
      feet = 0;
    }
    if (inches === "") {
      inches = 0;
    }
    const inchesCombined = feet + inches / 12;
    return inchesCombined;
  };

  // Axios PUT and POST request for updating user and adding vehicle
  onSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, userName, age } = this.state;

    axios
      .put(`http://localhost:5000/users/user/${this.props.id}`, {
        firstName,
        lastName,
        userName,
        age
      })
      .then(res => {
        console.log("ID FROM AXIOS IN MAIN", this.props.id);
        if (res) {
          this.setState({}); // No need to setState.
        }
      })
      .catch(err => console.log(err.response));
    const {
      name,
      heightFeet,
      heightInches,
      widthFeet,
      widthInches,
      lengthFeet,
      lengthInches,
      weight,
      axel_count,
      vehicle_class,
      dual_tires,
      class_A,
      class_B,
      class_C,
      fifth_wheel,
      pull_behind,
      trailer,
      isSignedIn,
      DirtRoads,
      SteepGrade,
      Potholes
    } = this.state;
    let height = this.combineDistanceUnits(
      this.state.heightInches,
      this.state.heightFeet
    );
    let width = this.combineDistanceUnits(
      this.state.widthInches,
      this.state.widthFeet
    );
    let length = this.combineDistanceUnits(
      this.state.lengthInches,
      this.state.lengthFeet
    );
    axios
      .post("http://localhost:5000/vehicle", {
        name,
        height: Number(height),
        width: Number(width),
        length: Number(length),
        weight: Number(weight),
        axel_count: Number(axel_count),
        vehicle_class,
        dual_tires,
        class_A,
        class_B,
        class_C,
        fifth_wheel,
        pull_behind,
        trailer,

        DirtRoads,
        SteepGrade,
        Potholes,
        user_id: this.props.id
      })
      .then(res => {
        console.log("response", res);
      })
      .catch(err => console.log(err));
  };

  // To go to the next form in the onboarding process
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // To go back to a previous step in the onboarding process
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //assigns state to a value based on which radio button has been clicked
  handleRadio = event => {
    this.setState({
      ...this.state,
      vehicle_class: event.target.value
    });
  };

  // Check for checkboxes in routing preferences
  handleCheck = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.checked
    });
  };

  // Handle changes for inputs in forms
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  showStep = () => {
    const {
      step,
      firstName,
      lastName,
      userName,
      age,
      name,
      heightFeet,
      heightInches,
      widthFeet,
      widthInches,
      lengthFeet,
      lengthInches,
      weight,
      axel_count,
      vehicle_class,
      dual_tires,
      class_A,
      class_B,
      class_C,
      fifth_wheel,
      pull_behind,
      trailer,
      isSignedIn,
      DirtRoads,
      SteepGrade,
      Potholes
    } = this.state;

    if (step === 1)
      return (
        <PersonalInfo
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          firstName={firstName}
          lastName={lastName}
          username={userName}
          age={age}
        />
      );
    if (step === 2)
      return (
        <VehicleLoginForm
          handleChange={this.handleChange}
          handleRadio={this.handleRadio}
          handleCheck={this.handleCheck}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          firstName={firstName}
          name={name}
          heightFeet={heightFeet}
          heightInches={heightInches}
          widthFeet={widthFeet}
          widthInches={widthInches}
          lengthFeet={lengthFeet}
          lengthInches={lengthInches}
          weightPounds={weight}
          axel_count={axel_count}
          vehicle_class={vehicle_class}
          dual_tires={dual_tires}
          class_A={class_A}
          class_B={class_B}
          class_C={class_C}
          fifth_wheel={fifth_wheel}
          pull_behind={pull_behind}
          trailer={trailer}
          isSignedIn={isSignedIn}
        />
      );
    if (step === 3)
      return (
        <RoutingPref
          state={this.state}
          prevStep={this.prevStep}
          handleCheck={this.handleCheck}
          onSubmit={this.onSubmit}
          DirtRoads={DirtRoads}
          SteepGrade={SteepGrade}
          Potholes={Potholes}
        />
      );
  };

  render() {
    const { step } = this.state;
    return <>{this.showStep()}</>;
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return { id: state.data[0].value.id, token: state.token[0] };
};

export default withRouter(connect(mapStateToProps, { register, login })(Main));
