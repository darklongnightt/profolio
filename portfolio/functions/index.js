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
      content: "added a new project.",
      user: `${project.firstName} ${project.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      userId: project.userId
    };

    return createNotification(notification);
  });

// Create notification for new education doc created
exports.educationCreated = functions.firestore
  .document("users/{userId}/educations/{educationId}")
  .onCreate(doc => {
    const education = doc.data();
    const notification = {
      content: "added a new education.",
      user: `${education.firstName} ${education.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      userId: education.userId
    };

    return createNotification(notification);
  });

// Create notification for new employment doc created
exports.employmentCreated = functions.firestore
  .document("users/{userId}/employments/{employmentId}")
  .onCreate(doc => {
    const employment = doc.data();
    const notification = {
      content: "added a new employment.",
      user: `${employment.firstName} ${employment.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      userId: employment.userid
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
        time: admin.firestore.FieldValue.serverTimestamp(),
        userId: user.uid
      };

      return createNotification(notification);
    });
});
