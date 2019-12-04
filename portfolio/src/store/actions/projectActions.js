export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    // Make async db call then dispatch state
    firestore
      .collection("projects")
      .add({
        ...project,
        firstName: profile.firstName,
        lastName: profile.lastName,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
