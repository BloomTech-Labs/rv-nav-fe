import {
  ADD_VEHICLE,
  ADD_USER,
  PERSONAL_INFO
} from "../actions/OnboardingAction";

export const initialState = {
  personalInfo: {
    firstName: "",
    lastName: "",
    username: "",
    age: "",
    firstNameError: null,
    formCompleted: false,
    formSubmitted: false
  },
  rvInfo: {
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
  formSubmitted: "FORM_SUBMITTED"
};

// export const handlers = {
//   [PERSONAL_INFO](state, action) {
//     return {
//       ...state,
//       personalInfo: {
//         ...state.personalInfo,
//         ...action.payload.personalInfo
//       }
//     };
//   }
// };

function validate(firstName, value) {
  if (typeof value === "string") value = value.trim();
  switch (firstName) {
    case "firstName":
      if (value.length === 0) {
        return "Must enter name";
      } else if (value.split(" ").length < 2) {
        return "Must enter first and last name";
      } else {
        return null;
      }
      break;
    case "lastName":
      if (value.length === 0) {
        return "Must enter email";
      } else if (
        !value.includes("@") ||
        !value.includes(".") ||
        value.split(".")[1].length < 2
      ) {
        return "Must enter valid email";
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
    case actions.formSubmitted:
      // if the form has been successfully submitted,
      // stop here to prevent rage clicks and re-submissions
      if (state.formCompleted) return state;
      let formValid = true;
      // invalidate the form if values are missing or in error
      if (
        state.firstNameError ||
        !state.firstName ||
        state.lastNameError ||
        !state.lastName
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

    default:
      return state;
  }
};

export default onboardingReducer;
