export const createProject = project => {
  return (dispatch, getState) => {
    // Make async db call then dispatch state
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
