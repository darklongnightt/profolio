const noError = ({ error, ...rest }) => rest;

export const emailRegister = newUser => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    newUser = noError(newUser);

    // Async call to firebase create new user
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        // Store user information into the db
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "REGISTER_ERROR", err });
      });
  };
};

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

export const fbSignIn = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(resp => {
        // Gets signed in user information from facebook
        const userId = resp.user.uid;
        const profile = resp.additionalUserInfo.profile;
        console.log(resp);

        // Check if user exists in database
        const userRef = firestore.collection("users").doc(userId);
        userRef.get().then(doc => {
          // Register user if does not exist
          if (!doc.exists) {
            userRef
              .set({
                email: profile.email,
                firstName: profile.first_name,
                lastName: profile.last_name,
                initials: profile.first_name[0] + profile.last_name[0],
                photoUrl: profile.picture.data.url
              })
              .then(resp => {
                dispatch({ type: "FB_REGISTER_SUCCESS" });
              });
          } else {
            dispatch({ type: "FB_LOGIN_SUCCESS" });
          }
        });
      })
      .catch(err => {
        dispatch({ type: "FB_LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    // Async call to firebase logout
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};
