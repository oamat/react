import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBT7QIZDbi8c3rp7WJl5_UcCk4Ne29OXlU",
	authDomain: "reactinfirebase.firebaseapp.com",
	databaseURL: "https://reactinfirebase.firebaseio.com",
	projectId: "reactinfirebase",
	storageBucket: "reactinfirebase.appspot.com",
	messagingSenderId: "493121200292"
};

firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {platillos, bebidas};


export default datos;




