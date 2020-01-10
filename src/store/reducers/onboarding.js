import {ADD_VEHICLE, ADD_USER} from '../actions/OnboardingAction';

export const initialState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        username: '',
        age: ''
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

const onboardingReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            console.log("users", state.personalInfo, action.payload);
            let users = state.personalInfo.slice();
            users.push(action.payload);
            console.log("users push", users);
            return {
              ...state,
              // error: null,
              loading: false,
              users: { users: users }
            };
        case ADD_VEHICLE:
            console.log("rvInfo", state.rvInfo, action.payload);
            let rvInfo = state.rvInfo.slice();
            rvInfo.push(action.payload);
            console.log("rvInfo push", rvInfo);
            return {
                ...state,
                // error: null,
                loading: false,
                rvInfo: { rvInfo: rvInfo }
      };
      
    default:
        return state;
    }
};

export default onboardingReducer;