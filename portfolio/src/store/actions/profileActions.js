import moment from "moment";

const cleanData = ({ error, mode, ...rest }) => rest;

export const editProfile = (profile) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    profile = cleanData(profile);

    // Make async db call then dispatch state
    firestore
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        const userData = doc.data();
        firestore
          .collection("users")
          .doc(userId)
          .set({
            ...userData,
            ...profile,
          });
      })
      .then(() => {
        console.log("EDIT_PROFILE", profile);
      })
      .catch((err) => {
        console.log("EDIT_PROFILE_ERROR", err.message);
      });
  };
};

export const uploadPhoto = (photo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get reference to storage and firestore
    const firestore = getFirestore();
    const storage = getFirebase().storage().ref();
    const userId = getState().firebase.auth.uid;

    // Make async call to upload file to firebase storage
    storage
      .child(`${userId}/profilePhoto`)
      .put(photo)
      .then((snapshot) => {
        // Retrieve photo url and update in db
        storage
          .child(`${userId}/profilePhoto`)
          .getDownloadURL()
          .then((url) => {
            // Adding url to user profile data
            firestore
              .collection("users")
              .doc(userId)
              .get()
              .then((doc) => {
                const userData = doc.data();
                firestore
                  .collection("users")
                  .doc(userId)
                  .set({
                    ...userData,
                    photoUrl: url,
                  })
                  .then(() => {
                    console.log("UPLOAD_SUCCESS", url);
                  });
              });
          });
      })
      .catch((err) => {
        console.log("UPLOAD_ERROR", err.message);
      });
  };
};

export const updateSettings = (settings) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get states from the store
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    // Adding settings to the user
    firestore
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        const userData = doc.data();
        firestore
          .collection("users")
          .doc(userId)
          .set({
            ...userData,
            ...settings,
          })
          .then(() => {
            console.log("UPDATE_SETTINGS", settings);
          });
      })
      .catch((err) => {
        console.log("UPDATE_SETTINGS_ERROR", err.message);
        return err;
      });
  };
};

export const updateProfileViews = (userId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const today = moment().format("YYYY-MM-DD");
    const date = moment().format("Do MMM");

    const docRef = firestore
      .collection("users")
      .doc(userId)
      .collection("views")
      .doc(today);

    // Check that doc exists, increment profile views on current date
    docRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          // Create doc and set count as 1
          docRef.set({
            count: 1,
            date: date,
          });
        } else {
          const count = doc.data().count;

          docRef.set({
            count: count + 1,
            date: date,
          });
        }
      })
      .catch((err) => {
        console.log("UPDATE_VIEWS_ERROR", err.message);
      });
  };
};
