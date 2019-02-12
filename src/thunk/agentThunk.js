import { addAgent } from "../actions/agentActions";

export const postAgent = agent => {
  // debugger;
  return function(dispatch) {
    return fetch("http://localhost:3000/api/v1/agents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(agent)
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        localStorage.setItem("token", data.jwt);
        dispatch(addAgent(data.renter));
      });
    // {
    //     localStorage.setItem("token", data.jwt);
    //     dispatch(addAgent(data));
    //   });
  };
};
