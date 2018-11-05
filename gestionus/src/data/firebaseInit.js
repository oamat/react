import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZrlKhYjytZ2oR69WdmFGsyyeKN4x4pWE",
    authDomain: "gestionus-erp.firebaseapp.com",
    databaseURL: "https://gestionus-erp.firebaseio.com",
    projectId: "gestionus-erp",
    storageBucket: "gestionus-erp.appspot.com",
    messagingSenderId: "896247990481"
  };

firebase.initializeApp(config);