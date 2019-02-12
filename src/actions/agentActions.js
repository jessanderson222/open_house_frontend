export const addAgent = agentObj => ({
  type: "SIGN_IN_AGENT",
  payload: agentObj
});

export const signInAgent = agentObj => ({
  type: "SIGN_IN_AGENT",
  payload: agentObj
});

export const findAgent = token => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/agentprofile", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
        Accepts: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => dispatch(signInAgent(res)));
    // dispatch(signInAgent(res))
    // dispatch(signInRenter(res.renter))
  };
};
