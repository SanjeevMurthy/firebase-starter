import firebase from 'firebase';

const config = {
    serviceAccount:'./FirstWebapp-69a755141a32.json',
    databaseURL: "https://firstwebapp-fcbe7.firebaseio.com",
  };
  
let firebaseApp=firebase.initializeApp(config);

let db = firebaseApp.database();

let ref = db.ref("server/saving-data/fireblog");

let usersRef = ref.child("users");

//Saving data using set method and passing multiple user objects
// usersRef.set({
//     'alan':{
//         date_of_birth: "June 23, 1912",
//         full_name: "Alan Turing"
//     },
//     'gracehop':{
//          date_of_birth: "December 9, 1906",
//         full_name: "Grace Hopper"
//     }
// });

usersRef.update({
    "alan":{
        'nickname':'alan'
    },
    'gracehop':{
        'nickname':'grace'
    }
}, (error,data)=>{
    if(error){
        console.log("Error "+error);
    }else{
        console.log("Data Updated succesfully !!");
    }
});

//Saving data using set method for each users
// usersRef.child("sanjeev").set({
//   date_of_birth: "June 23, 1912",
//   full_name: "Sanjeev Murthy"
// });


//Updating saved data
// let sanjeevRef=usersRef.child('sanjeev');
// sanjeevRef.update({
//     'date_of_birth':'August 17 1990'
// });

