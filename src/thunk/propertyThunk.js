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

export const addProperty = (form, id) => dispatch => {
  console.log(form, id);
};

// export const deleteProperty = property => dispatch => {
//   debugger;
//   return fetch(`http://localhost:3000/api/v1/properties${property.id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ` + localStorage.getItem("token")
//     }
//   })
//     .then(res => res.json())
//     .then(json => console.log("deleted!"));
// };
