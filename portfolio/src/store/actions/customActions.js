const cleanData = ({ error, mode, ...rest }) => rest;

export const createCustom = custom => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    custom = cleanData(custom);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("customs")
      .add({
        ...custom,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_CUSTOM", custom });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CUSTOM_ERROR", err });
      });
  };
};

export const deleteCustom = customId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("customs")
      .doc(customId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_CUSTOM", customId });
      })
      .catch(err => {
        dispatch({ type: "DELETE_CUSTOM_ERROR", err });
      });
  };
};

export const editCustom = (custom) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    custom = cleanData(custom);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .collection("customs")
      .doc(custom.id)
      .set({
        ...custom,
        userId: userId,
        modifiedAt: new Date()
      })
      .then(() => {
        dispatch({ type: "EDIT_CUSTOM", custom });
      })
      .catch(err => {
        dispatch({ type: "EDIT_CUSTOM_ERROR", err });
      });
  };
};
