import {
  ADD_VEHICLE,
  ADD_USER,
  PERSONAL_INFO
} from "../actions/OnboardingAction";

export const initialState = {
  personalInfo: {
    step: 1,
    firstName: "",
    lastName: "",
    username: "",
    age: "",
    firstNameError: null,
    lastNameError: null,
    usernameError: null,
    ageError: null,
    formCompleted: false,
    formSubmitted: false
  },
  rvInfo: {
    //step: 2
    vehicleName: "",
    heightFeet: "",
    heightInches: "",
    widthFeet: "",
    widthInches: "",
    lengthFeet: "",
    lengthInches: "",
    weightPounds: "",
    axleCount: "",
    vehicleClass: ""
  }
};

export const actions = {
  firstNameChanged: "FIRST_NAME_CHANGED",
  lastNameChanged: "LAST_NAME_CHANGED",
  usernameChanged: "USERNAME_CHANGED",
  ageChanged: "AGE_CHANGED",
  formSubmitted: "FORM_SUBMITTED",
  infoAdded: "ADD_INFO"
};



function validate(firstName, value) {
  if (typeof value === "string") value = value.trim();
  switch (firstName) {
    case "firstName":
      if (value.length === 0) {
        return "Must enter name";
      } else if (value.split(" ").length < 2) {
        return "Must enter first name";
      } else {
        return null;
      }
      break;
    case "lastName":
      if (value.length === 0) {
        return "Must enter last name";
      } else if (
        !value.includes("@") ||
        !value.includes(".") ||
        value.split(".")[1].length < 2
      ) {
        return "Must enter valid last name";
      } else {
        return null;
      }
      break;
    case "username":
      if (value.length === 0) {
        return "Must enter username";
      } else if (value.split(" ").length < 2) {
        return "Must enter username";
      } else {
        return null;
      }
      break;
    case "age":
      if (value.length === 0) {
        return "Must enter age";
      } else if (value.split(" ").length < 1) {
        return "Must enter age";
      } else {
        return null;
      }
      break;
  }
}

export const onboardingReducer = (state = initialState, action) => {
  let error;
  switch (action.type) {
    case actions.firstNameChanged:
      error = validate("firstName", action.payload);
      return { ...state, firstName: action.payload, firstNameError: error };
    case actions.lastNameChanged:
      error = validate("lastName", action.payload);
      return { ...state, lastName: action.payload, lastNameError: error };
    case actions.usernameChanged:
      error = validate("username", action.payload);
      return { ...state, username: action.payload, usernameError: error };
    case actions.ageChanged:
      error = validate("age", action.payload);
      return { ...state, age: action.payload, ageError: error };
    case actions.formSubmitted:
      // if the form has been successfully submitted,
      // stop here to prevent rage clicks and re-submissions
      if (state.formCompleted) return state
      let formValid = true;
      // invalidate the form if values are missing or in error
      if (
        state.firstNameError ||
        !state.firstName ||
        state.lastNameError ||
        !state.lastName ||
        state.usernameError ||
        !state.username ||
        state.ageError ||
        !state.age
      ) {
        formValid = false;
      }
      // if the user has attempted to submit before, stop here
      if (state.formSubmitted) return { ...state, formCompleted: formValid };
      // if this is the first submit, we need to validate in case the user
      // clicked submit without typing anything
      let firstNameError = validate("firstName", state.firstName);
      let lastNameError = validate("lastName", state.lastName);
      return {
        ...state,
        firstNameError,
        lastNameError,
        formSubmitted: true,
        formCompleted: formValid
      };
      
      default:
        return state;
      }
    };
    
    export default onboardingReducer;











    
    // case "PASS_INFO":
    //   return {
    //     ...state,
    //     personalInfo: {...state.personalInfo, personalInfo: [...state.personalInfo, action.payload] },
    //     rvInfo: {...state.personalInfo.info, rv: [...state.personalInfo.info, ...state.rvInfo.rv, action.payload]}
    //   };
    // case 'PASS_INFO':
    //   let info = state.personalInfo;
    //   info.push(...state.info, rvInfo: [...state.info, action.payload]);
    //   return {
    //     ...state,
    //     info: {...state.info, rvInfo: [...state.info, action.payload]}
    //   }

    // case ADD_USER:
    //   console.log("users", state.personalInfo, action.payload);
    //   let users = state.personalInfo.slice();
    //   users.push(action.payload);
    //   console.log("users push", users);
    //   return {
    //     ...state,
    //     // error: null,
    //     loading: false,
    //     users: { users: users }
    //   };
    // case ADD_VEHICLE:
    //   console.log("rvInfo", state.rvInfo, action.payload);
    //   let rvInfo = state.rvInfo.slice();
    //   rvInfo.push(action.payload);
    //   console.log("rvInfo push", rvInfo);
    //   return {
    //     ...state,
    //     // error: null,
    //     loading: false,
    //     rvInfo: { rvInfo: rvInfo }
    //   };