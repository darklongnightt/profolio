import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDY48Yo5Fr-nznNVeYXgdp44C7awV4axh8",
  authDomain: "profolio-craft.firebaseapp.com",
  databaseURL: "https://profolio-craft.firebaseio.com",
  projectId: "profolio-craft",
  storageBucket: "profolio-craft.appspot.com",
  messagingSenderId: "80916112422",
  appId: "1:80916112422:web:e835420485593559fb32e7",
  measurementId: "G-BT4PSV098M"
};

firebase.initializeApp(config);
export default firebase;
