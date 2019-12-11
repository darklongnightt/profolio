import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import employmentReducer from "./employmentReducer";
import educationReducer from "./educationReducer";
import customReducer from "./customReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  employment: employmentReducer,
  education: educationReducer,
  custom: customReducer
});

export default rootReducer;
