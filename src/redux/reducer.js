import { stat } from "fs";

const initialState = {
  loggedInRenter: null,
  properties: [],
  matches: [],
  loggedInAgent: null
};

const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loggedInRenter: action.payload };
    //this takes care of frontend, form data => thunk => thunk starts fetch => data sent to store
    case "SIGN_IN_AGENT":
      return { ...state, loggedInAgent: action.payload };
    case "GET_PROPERTIES":
      // debugger;
      return {
        ...state,
        properties: [
          ...action.payload.filter(
            property =>
              property.rent <= state.loggedInRenter.rent_max &&
              property.rent >= state.loggedInRenter.rent_min &&
              property.borough === state.loggedInRenter.borough
          )
        ]
      };
    case "GET_AGENT_PROPERTIES":
      return {
        ...state,
        properties: [
          ...action.payload.filter(
            property => property.agent_id === state.loggedInAgent.id
          )
        ]
      };
    case "GET_MATCHES":
      return {
        ...state,
        matches: [
          ...action.payload.filter(
            match => match.renter_id === state.loggedInRenter.id
          )
        ]
      };
    case "EDIT_RENTER":
      return { ...state, loggedInRenter: action.payload };
    case "EDIT_AGENT":
      return {
        ...state,
        properties: [...state.properties, action.payload]
      };
    case "ADD_MATCH":
      return {
        ...state,
        matches: [...state.matches, action.payload]
      };
    case "REMOVE_MATCH":
      return {
        ...state,
        matches: state.matches.filter(match => match !== action.payload)
      };
    case "LOG_OUT":
      return {
        ...state,
        loggedInRenter: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
