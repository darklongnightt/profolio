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
        console.log("EDIT_PROFILE", profile);
      })
      .catch(err => {
        console.log("EDIT_PROFILE_ERROR", err.message);
      });
  };
};

export const uploadPhoto = photo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get reference to storage and firestore
    const firestore = getFirestore();
    const storage = getFirebase()
      .storage()
      .ref();
    const userId = getState().firebase.auth.uid;

    // Make async call to upload file to firebase storage
    console.log(storage);
    storage
      .child(`${userId}/profilePhoto`)
      .put(photo)
      .then(snapshot => {
        // Retrieve photo url and update in db
        storage
          .child(`${userId}/profilePhoto`)
          .getDownloadURL()
          .then(url => {
            // Adding url to user profile data
            firestore
              .collection("users")
              .doc(userId)
              .get()
              .then(doc => {
                const userData = doc.data();
                firestore
                  .collection("users")
                  .doc(userId)
                  .set({
                    ...userData,
                    photoUrl: url
                  })
                  .then(() => {
                    console.log("UPLOAD_SUCCESS", url);
                  });
              });
          });
      })
      .catch(err => {
        console.log("UPLOAD_ERROR", err.message);
      });
  };
};
