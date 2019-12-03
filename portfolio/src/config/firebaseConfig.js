import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
