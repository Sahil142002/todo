
const firebaseConfig = {
  apiKey: "AIzaSyCWIZwXCgG96XLOsq0S3EC9zSJqlkGiqNY",
  authDomain: "to-do-live-155f4.firebaseapp.com",
  databaseURL: "https://to-do-live-155f4-default-rtdb.firebaseio.com",
  projectId: "to-do-live-155f4",
  storageBucket: "to-do-live-155f4.appspot.com",
  messagingSenderId: "1078302165381",
  appId: "1:1078302165381:web:cfe84c781e1b873ff7dcec",
  measurementId: "G-VMXMV63C27"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var db = firebase.firestore();