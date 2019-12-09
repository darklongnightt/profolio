const cleanData = ({ error, mode, ...rest }) => rest;

export const editProfile = profile => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    profile = cleanData(profile);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .set({
        ...profile,
        initials: profile.firstName[0] + profile.lastName[0]

      })
      .then(() => {
        dispatch({ type: "EDIT_PROFILE", profile });
      })
      .catch(err => {
        dispatch({ type: "EDIT_PROFILE_ERROR", err });
      });
  };
};
