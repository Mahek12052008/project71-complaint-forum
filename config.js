import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyCz3K2O6K8VbRwJWkoH46xBHmPolYBuT2k",
  authDomain: "complaint-forum-27c1e.firebaseapp.com",
  projectId: "complaint-forum-27c1e",
  storageBucket: "complaint-forum-27c1e.appspot.com",
  messagingSenderId: "775832685026",
  appId: "1:775832685026:web:11f45ccd9ff6b3604e91bb"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

