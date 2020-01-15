import React, { Component } from "react";
import PersonalInfo from "./PersonalInfoForm";
import VehicleLoginForm from "./VehicleLoginForm";
import RoutingPref from "./Routing-Pref";

class Main extends Component {
  state = {
    step: 1,

    //step 1
    first_name: "",
    last_name: "",
    user_name: "",
    age: "",

    //step: 2
    name: "",
    height: "",
    width: "",
    length: "",
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

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //assigns state to a value based on which radio button has been clicked
  handleRadio = event => {
    // const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      ...this.state,
      class_name: event.target.value
    });
  };

  handleCheck = event => {
    //const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: event.target.checked
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  showStep = () => {
    const {
      step,
      first_name,
      last_name,
      user_name,
      age,
      name,
      height,
      width,
      length,
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
          firstName={first_name}
          lastName={last_name}
          username={user_name}
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
          firstName={first_name}
          vehicleName={name}
          heightFeet={heightFeet}
          heightInches={heightInches}
          widthFeet={widthFeet}
          widthInches={widthInches}
          lengthFeet={lengthFeet}
          lengthInches={lengthInches}
          weightPounds={weight}
          axleCount={axel_count}
          class_name={vehicle_class}
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
          DirtRoads={DirtRoads}
          SteepGrade={SteepGrade}
          Potholes={Potholes}
        />
      );
  };

  render() {
    const { step } = this.state;
    return (
      <>
        {/* <h2> Step {step} of 3.</h2> */}
        {this.showStep()}
      </>
    );
  }
}

export default Main;
