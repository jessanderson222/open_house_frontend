const initialState = {
  loggedInRenter: null,
  properties: [],
  matches: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loggedInRenter: action.payload };
    //this takes care of frontend, form data => thunk => thunk starts fetch => data sent to store
    case "GET_PROPERTIES":
      // debugger;
      return { ...state, properties: action.payload };
    case "GET_MATCHES":
      return { ...state, matches: action.payload };
    case "EDIT_RENTER":
      return { ...state, loggedInRenter: action.payload };
    case "REMOVE_MATCH":
      return {
        ...state,
        matches: state.matches.filter(match => match !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
