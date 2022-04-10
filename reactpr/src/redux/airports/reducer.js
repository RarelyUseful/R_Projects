import { initialAirportsState } from "./initialState";

export const airportReducer = (state = initialAirportsState, action) => {
  switch (action.type) {
    case "SET_INITIAL_AIRPORTS_LIST":
      return { ...state, airports: action.value };
    default:
      return state;
  }
};
