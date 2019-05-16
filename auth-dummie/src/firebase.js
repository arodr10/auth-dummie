import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

// Initialize Firebase

var config = {
    apiKey: "AIzaSyAPlyFSGRPr7MAXZcoPqj8GVpnoUI5ZzJg",
    authDomain: "login-simple-593d7.firebaseapp.com",
    databaseURL: "https://login-simple-593d7.firebaseio.com",
    projectId: "login-simple-593d7",
    storageBucket: "login-simple-593d7.appspot.com",
    messagingSenderId: "828242298759",
    appId: "1:828242298759:web:bd16db46322da06b"
};

firebase.initializeApp(config);

const auth      = firebase.auth()
const db        = firebase.firestore()
const storage   = firebase.storage()
const functions = firebase.functions()

export {
    firebase,
    auth,
    db,
    storage,
    functions
}