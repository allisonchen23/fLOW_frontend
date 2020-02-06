import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyBKlHtX6_JuKxIEROcVcC0oUKwFbwj_UpI",
//   authDomain: "react-50f71.firebaseapp.com",
//   databaseURL: "https://react-50f71.firebaseio.com",
//   projectId: "react-50f71",
//   storageBucket: "react-50f71.appspot.com",
//   messagingSenderId: "898138328086",
//   appId: "1:898138328086:web:0bdb6a856278a46e02b937",
//   measurementId: "G-D35GFWXVY5"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBa97q4DWj7xsO4DWtFyEJQaSD4Cv-QcbA",
  authDomain: "testproj-81eb3.firebaseapp.com",
  databaseURL: "https://testproj-81eb3.firebaseio.com",
  projectId: "testproj-81eb3",
  storageBucket: "testproj-81eb3.appspot.com",
  messagingSenderId: "326625281759",
  appId: "1:326625281759:web:7dfdd060c65ab5ff604b6a",
  measurementId: "G-VS469K15HM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;