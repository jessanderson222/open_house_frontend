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
        localStorage.setItem("token", data.jwt);
        dispatch(addAgent(data.agent));
      });
  };
};

export const signInAgent = agent => {
  // debugger;
  return function(dispatch) {
    return fetch("http://localhost:3000/api/v1/agentlogin", {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        agent: {
          email: agent.email,
          password: agent.password
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        localStorage.setItem("token", data.jwt);
        dispatch(addAgent(data.renter));
      });
  };
};
