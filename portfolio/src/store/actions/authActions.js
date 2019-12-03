export const emailSignIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    // Async call to firebase signin with email and password
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
