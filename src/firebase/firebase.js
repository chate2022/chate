const firebaseConfig = {
  apiKey: "AIzaSyBiIceNIFV0eFGQQKlkAv6c1RoD-fa_DM0",
  authDomain: "chat-bae3a.firebaseapp.com",
  projectId: "chat-bae3a",
  storageBucket: "chat-bae3a.appspot.com",
  messagingSenderId: "622181440720",
  appId: "1:622181440720:web:e4c57539ae627ab1d5d2d5",
  measurementId: "G-6W3GBWT9RW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
const storageRef = firebase.storage()
//referencia para cada sala do chat
const dbAdmin = firebase.firestore().collection('Admin')
const dbSala1 = firebase.firestore().collection('sala1')
const dbSala2 = firebase.firestore().collection('sala2')
const dbSala3 = firebase.firestore().collection('sala3')
const dbSala4 = firebase.firestore().collection('sala4')