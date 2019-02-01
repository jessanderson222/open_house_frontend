const initialState = {
  renters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RENTER":
      const newRenterArray = [...state.renters, action.payload];
      return { ...state, renters: newRenterArray };
    default:
      return state;
  }
};

export default reducer;
