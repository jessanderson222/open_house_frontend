export const postMatch = (renter, property) => {
  return function(dispatch) {
    debugger;
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
      .then(data => console.log(data));
  };
};
