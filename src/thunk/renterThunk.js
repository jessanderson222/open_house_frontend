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
      .then(console.log);
  };
};
