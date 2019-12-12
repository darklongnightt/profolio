const cleanData = ({ error, mode, ...rest }) => rest;

export const createEducation = education => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    education = cleanData(education);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("educations")
      .add({
        ...education,
        firstName: profile.firstName,
        lastName: profile.lastName,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_EDUCATION", education });
      })
      .catch(err => {
        dispatch({ type: "CREATE_EDUCATION_ERROR", err });
      });
  };
};

export const deleteEducation = educationId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("educations")
      .doc(educationId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_EDUCATION", educationId });
      })
      .catch(err => {
        dispatch({ type: "DELETE_EDUCATION_ERROR", err });
      });
  };
};

export const editEducation = education => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    education = cleanData(education);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("educations")
      .doc(education.id)
      .set({
        ...education,
        firstName: profile.firstName,
        lastName: profile.lastName,
        userId: userId,
        modifiedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "EDIT_EDUCATION", education });
      })
      .catch(err => {
        dispatch({ type: "EDIT_EDUCATION_ERROR", err });
      });
  };
};
