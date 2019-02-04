const initialState = {
  loggedInRenter: null
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loggedInRenter: action.payload };
    //this takes care of frontend, form data => thunk => thunk starts fetch => data sent to store
    default:
      return state;
  }
};

export default reducer;
