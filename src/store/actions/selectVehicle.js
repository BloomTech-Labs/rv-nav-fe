export const SELECTED = "SELECTED";

export const selectVehicle = id => {
  return {
    type: SELECTED,
    payload: id
  };
};
