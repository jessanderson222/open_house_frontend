import { postMatches } from "../actions/matchActions";
import { removeMatch } from "../actions/matchActions";
import { addMatchToDom } from "../actions/matchActions";

export const postMatch = (renter, property) => {
  return function(dispatch) {
    return fetch("http://localhost:3000/api/v1/matches", {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        match: {
          property_id: property.id,
          renter_id: renter.id
        }
      })
    })
      .then(resp => resp.json())
      .then(data => dispatch(addMatchToDom(data)));
  };
};

export const getMatches = () => dispatch => {
  // debugger;
  return fetch("http://localhost:3000/api/v1/matches", {
    method: "GET",
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => dispatch(postMatches(data)));
};

export const deleteMatchFromBackEnd = match => dispatch => {
  return fetch(`http://localhost:3000/api/v1/matches/${match.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => console.log(data));
};
