import { addRenter } from "../actions/renterActions";

export const postRenter = renter => {
  return function(dispatch) {
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

export const signInRenter = renter => {
  // debugger;
  return function(dispatch) {
    // debugger;
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        renter: {
          username: renter.username,
          password: renter.password
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        dispatch(addRenter(data.renter));
      });
  };
};

export const editRenter = (form, renter) => dispatch => {
  // fetch
  // dispatch an action object using response values from fetch
  // fetch("google.com").then(res =>
  //   dispatch({ type: "SOME_ACTION", payload: res })
  // );
  debugger;
  console.log(renter);
  return fetch(`http://localhost:3000/api/v1/renters/${renter.renter.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      renter: {
        bathrooms: form.bathrooms,
        bedrooms: form.bedrooms,
        borough: form.borough,
        distance_to_subway: form.distanceToSubway,
        doorman: form.doorman,
        elevator: form.elevator,
        laundry: form.laundry,
        move_in_date: form.moveInDate,
        pet_friendly: form.petFriendly,
        rent_max: form.rentMax,
        rent_min: form.rentMin,
        start_date: form.startDate
      }
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.error);
  // fetch('')
};
