import firebase from 'firebase';

const config = {
    serviceAccount:'./FirstWebapp-69a755141a32.json',
    databaseURL: "https://firstwebapp-fcbe7.firebaseio.com",
  };
  
let firebaseApp=firebase.initializeApp(config);

let db = firebaseApp.database();

let ref = db.ref('server/saving-data/fireblog/posts');

//value Event - which returns all the child elements
// ref.on('value',(snapshot)=>{
//     console.log(snapshot.val());
// },(errorObject)=>{
//     console.log("Read Failed !! : ",errorObject);
// });

//child_added event is triggered when new child is added to the database
ref.on('child_added',(snapshot,prevChildKey)=>{
   // console.log("child_added !!");
    //console.log("snapshot ",snapshot.val());
    //  var newPost = snapshot.val();
    // console.log("Author: " + newPost.author);
    // console.log("Title: " + newPost.title);
    // console.log("Previous Post ID: " + prevChildKey);
});

// Get the data on a post that has changed
ref.on("child_changed", function(snapshot) {
  var changedPost = snapshot.val();
  console.log("child_changed :  The updated post is " + JSON.stringify(changedPost));
});

ref.on('child_removed',(snapshot)=>{
    let deletedPost=snapshot.val();
    console.log("Deleted post is :",JSON.stringify(deletedPost));
});