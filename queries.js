
const firebase = require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyAXQTjSq-RjCqPiN_OqRUETRYWF1zn6dek",
  authDomain: "legs-miserable.firebaseapp.com",
  databaseUrl: "https://legs-miserable.firebaseio.com",
  projectId: "lega-miserable",
  storageBucket: "legs-miserable.appspot.com",
  messagingSenderId: "sender-id"
  //appId: "app-id",
  //measurementId: "G-measurement-id",
  
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore() ; 



function works() {


    
console.log("hi");
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}

      




module.exports =  worka ; 