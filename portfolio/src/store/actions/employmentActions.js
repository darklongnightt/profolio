const cleanData = ({ error, mode, ...rest }) => rest;

export const createEmployment = employment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    employment = cleanData(employment);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("employments")
      .add({
        ...employment,
        userId: userId,
        firstName: profile.firstName,
        lastName: profile.lastName,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_EMPLOYMENT", employment });
      })
      .catch(err => {
        dispatch({ type: "CREATE_EMPLOYMENT_ERROR", err });
      });
  };
};

export const deleteEmployment = employmentId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("employments")
      .doc(employmentId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_EMPLOYMENT", employmentId });
      })
      .catch(err => {
        dispatch({ type: "DELETE_EMPLOYMENT_ERROR", err });
      });
  };
};

export const editEmployment = (employment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    employment = cleanData(employment);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("employments")
      .doc(employment.id)
      .set({
        ...employment,
        userId: userId,
        firstName: profile.firstName,
        lastName: profile.lastName,
        modifiedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "EDIT_EMPLOYMENT", employment });
      })
      .catch(err => {
        dispatch({ type: "EDIT_EMPLOYMENT_ERROR", err });
      });
  };
};
