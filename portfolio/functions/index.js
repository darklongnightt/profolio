const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Create notification data in firestore
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => {
      console.log("Notification Added", doc);
    });
};

// Create notification for new project doc created
exports.projectCreated = functions.firestore
  .document("users/{userId}/projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "created a new project.",
      user: `${project.firstName} ${project.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

// Create notification for new user joined in auth
exports.userJoined = functions.auth.user().onCreate(user => {
  // Get record from firestore on user data
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const user = doc.data();
      const notification = {
        content: "registered to Profolio.",
        user: `${user.firstName} ${user.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});
