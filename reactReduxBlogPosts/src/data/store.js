import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


// const statedef=[{
//     id: 1,
//     title: "Título del post 1",
//     body: "Cuerpo del post 1"

// },
// {
//     id: 2,
//     title: "Título del post 2",
//     body: "Cuerpo del post 2"
// }
// ];
// const allPosts = (state = statedef , action) => {

const allPosts = (state = [], action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'LOAD_DATA':
            newState = state.concat(action.data); // concatenamos el data recibido.
            return newState;
        case 'CLEAR_DATA':
            newState = [];
            return newState;
        default:
            return state;
    }
}

const showPost = (state = {}, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'GET_POST':
            newState = action.data; // concatenamos el data recibido.
            return newState;
        case 'CLEAR_POST':
            newState = {}; // concatenamos el data recibido.
            return newState;
        default:
            return state;
    }
}

const errorPost = (state = null, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'ERROR_GET_POST':
            newState = "Error de carga de Post"; // concatenamos el data recibido.
            return newState;        
        default:
            return null;  //Así la pròxima vez lo dejará a null
    }
}

const userStatus = (state = {}, action) => {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'USER_CREATED':
            newState = { mensaje: "el usuario ha sido creado" }
            return newState;
        case 'USER_ERROR':
            newState = { mensaje: "el usuario NO se creó" };
            return newState;
        case 'LOGIN': // este case se ha puesto en 2 reducers (session y userStatus), pero siempre pasaremos por todos los reducers
            newState = { mensaje: "Usuario correcto, puedes entrar" };
            return newState;
        default:
            return state;
    }
}


const loginSession= (state = null, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'LOGIN': // este case se ha puesto en 2 reducers (session y userStatus), pero siempre pasaremos por todos los reducers
            newState = action.data;
            return newState;
        case 'LOGOUT':
            newState = null;
            return newState;
        default:
            return state;
    }
}


const reducers = combineReducers({
    allPosts: allPosts, //necesario para Home, hay función.
    userStatus: userStatus, //necesario para SignUp, hay función.
    loginSession: loginSession, //necesario para SignUp, hay función.
    showPost: showPost,
    errorPost: errorPost,
    form: formReducer  // necesario para los forms, no hay función, son propias de redux-form.

});


const store = createStore(reducers);

export default store;