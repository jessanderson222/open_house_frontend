import { postAgentProperties } from "../actions/propertyActions";
import { updateProperty } from "../actions/propertyActions";
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

export const getAgentProperties = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/properties", {
    method: "GET",
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(data => dispatch(postAgentProperties(data)));
};

export const addProperty = (form, id) => dispatch => {
  return fetch("http://localhost:3000/api/v1/properties", {
    method: "POST",
    headers: {
      Authorization: `Bearer` + localStorage.getItem("token"),
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify({
      property: {
        bathrooms: form.bathrooms,
        bedrooms: form.bedrooms,
        borough: form.borough,
        distance_to_subway: form.distance_to_subway,
        doorman: form.doorman,
        elevator: form.elevator,
        img_1: form.img_1,
        img_2: form.img_2,
        img_3: form.img_3,
        laundry: form.laundry,
        move_in_date: form.move_in_date,
        neighborhood: form.neighborhood,
        pet_friendly: form.pet_friendly,
        rent: form.rent,
        agent_id: id
      }
    })
  })
    .then(resp => resp.json())
    .then(data => dispatch(updateProperty(data)));
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
