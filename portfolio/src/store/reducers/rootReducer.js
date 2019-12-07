import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import employmentReducer from "./employmentReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  employment: employmentReducer
});

export default rootReducer;
