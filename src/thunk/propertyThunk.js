import { postProperties } from "../actions/propertyActions";

export const getProperties = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/properties", {
    method: "GET",
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => dispatch(postProperties(data)));
};
