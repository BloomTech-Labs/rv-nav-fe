import * as types from "../actions";

import { SELECTED } from "../actions/selectVehicle";

const initialState = {
  user: {},
  data: [],
  vehicles: [],
  error: null,
  selected_id: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true
      };
    case types.REGISTER:
      return {
        user: { ...action.payload },
        ...state,
        loading: false,
      };
    case types.LOGIN:
      return {
        user: { ...action.payload.user },
        ...state,
        token: action.payload,
        loading: false,
        data: [...state.data, { value: action.payload }]
      };
    case types.LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      return initialState;

    case types.ADD_VEHICLE_SUCCESS:
      console.log("vehicles state", state.vehicles);
      console.log("add_vehicles payload", action.payload);
      return {
        ...state,
        loading: false,
        vehicles: {
          vehicles: [...state.vehicles.vehicles, action.payload]
        }
      };

    case types.GET_VEHICLE:
      console.log("get_vehicles payload", action.payload);
      return {
        ...state,
        loading: false,
        vehicles: { ...state.vehicles, vehicles: action.payload }
      };
    case types.DELETE_VEHICLE:
      let filteredVehicles = state.vehicles.vehicles.filter(vehicle => {
        console.log("vehicle info", vehicle.id, action.payload);
        return vehicle.id !== action.payload;
      });
      return {
        ...state,
        error: "error",
        loading: false,
        vehicles: { vehicles: filteredVehicles }
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        error: "error",
        loading: false
      };
    case types.DUPLICATE_USER:
      return {
        ...state,
        error: "Username already taken",
        loading: false
      };
    case types.DUPLICATE_EMAIL:
      return {
        ...state,
        error: "Email already taken",
        loading: false
      };
    case types.INVALID_CREDENTIALS:
      return {
        ...state,
        error: "Invalid username or password",
        loading: false
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case SELECTED:
      console.log("reducer time");
      return {
        ...state,
        selected_id: action.payload
      };
    default:
      return state;
  }
};
