import firebase from 'firebase';

const config = {
    serviceAccount:'./FirstWebapp-69a755141a32.json',
    databaseURL: "https://firstwebapp-fcbe7.firebaseio.com",
  };
  
let firebaseApp=firebase.initializeApp(config);

let db = firebaseApp.database();

let ref = db.ref('server/saving-data/fireblog');

let postRef=ref.child('posts');

let post=postRef.child('-KQlT9joa__mQn0bEXR8');

post.update({
    'author':'gracehop_update5'
},()=>{
    console.log(post.key," updated");
})