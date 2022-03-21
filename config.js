import firebase from "firebase";
require("@firebase/firestore");

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAzE5RZlXFgPVpAidvY8QAP3xYNiNUf-i8",
  authDomain: "bed-time-stories-7bfc5.firebaseapp.com",
  databaseURL: "https://bed-time-stories-7bfc5-default-rtdb.firebaseio.com",
  projectId: "bed-time-stories-7bfc5",
  storageBucket: "bed-time-stories-7bfc5.appspot.com",
  messagingSenderId: "242066948515",
  appId: "1:242066948515:web:1ad2192cb68096e9465a16",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
