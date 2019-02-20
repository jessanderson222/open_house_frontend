// //make action that creates it
export const postProperties = data => ({
  type: "GET_PROPERTIES",
  payload: data
});

export const postAgentProperties = data => ({
  type: "GET_AGENT_PROPERTIES",
  payload: data
});

export const updateProperty = data => ({
  type: "EDIT_AGENT",
  payload: data
});
