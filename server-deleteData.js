import firebase from 'firebase';

const config = {
    serviceAccount:'./FirstWebapp-69a755141a32.json',
    databaseURL: "https://firstwebapp-fcbe7.firebaseio.com",
  };
  
let firebaseApp=firebase.initializeApp(config);

let db = firebaseApp.database();

let ref = db.ref('server/saving-data/fireblog/posts');

let post=ref.child('-KQlT9joa__mQn0bEXR8');

post.remove((error)=>{
    if(error){
        console.log('Error in deleting ',post.key);
    }else{
        console.log("Deleted succesfully !!");
    }
});