const noError = ({ error, ...rest }) => rest

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    project = noError(project);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
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

//let deleteDoc = db.collection('cities').doc('DC').delete();
export const deleteProject = projectId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_PROJECT", projectId });
      })
      .catch(err => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
};