export const postMatches = data => ({
  type: "GET_MATCHES",
  payload: data
});

export const removeMatch = data => ({
  type: "REMOVE_MATCH",
  payload: data
});
