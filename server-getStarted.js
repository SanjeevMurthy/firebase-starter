import firebase from 'firebase';
import express from 'express';

const app=express();

const config = {
    serviceAccount:'./FirstWebapp-69a755141a32.json',
    databaseURL: "https://firstwebapp-fcbe7.firebaseio.com",
  };
  
let firebaseApp=firebase.initializeApp(config);

let db = firebaseApp.database();

var sampleRef=db.ref().child('sample');

console.log("Connected to firebase !!");

sampleRef.on('value', snap => {
    console.log("sampleRef"+ snap.val());
});


var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

// app.listen(8080, ()=>{
//     console.log('App Running on port 8080');
// });