export const addRenter = renterObj => ({ type: "SIGN_IN", payload: renterObj });
export const signInRenter = renterObj => ({
  type: "SIGN_IN",
  payload: renterObj
});
export const findRenter = token => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/profile", {
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => dispatch(signInRenter(res.renter)), console.log("done"));
  };
};
