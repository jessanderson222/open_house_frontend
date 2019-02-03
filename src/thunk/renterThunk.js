import { addRenter } from "../actions/renterActions";

export const postRenter = renter => {
  return function(dispatch) {
    debugger;
    return fetch("http://localhost:3000/api/v1/renters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        renter: {
          username: renter.username,
          email: renter.email,
          password: renter.password
        }
      })
    })
      .then(resp => resp.json())
      .then(data => dispatch(addRenter(data)));
  };
};
