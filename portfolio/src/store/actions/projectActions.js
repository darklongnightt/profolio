export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async db call then dispatch state
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
