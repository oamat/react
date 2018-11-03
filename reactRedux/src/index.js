import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';



const reducerNumero = (state = 2 , action) => {
var newState = Object.assign({},state);   
 if (action.type === "AUM"){
    console.log("dentro del reducer redux AUM");
    newState=state+1;
    return newState;
} else if (action.type === "DIS"){
    console.log("dentro del reducer redux DIS");
    newState=state-1;
    return newState;
} 
    return state;
}

const reducerTarea = (state=[], action) => {
    var newState = Object.assign({},state);   
    if (action.type === "ADD"){
        console.log("dentro del reducer redux ADD");
        newState=state.concat([{tarea: action.tarea, id: action.id }]);
        return newState;
    }
    return state;
}
 

const reducerId = (state=1, action) => {
    var newState = Object.assign({},state);   
    if (action.type === "ADD"){
        console.log("dentro del reducerId redux ADD");
        newState=state+1;
        return newState;
    }
    return state;
}
const reducer = combineReducers({
    numero: reducerNumero,
    tareas: reducerTarea,
    id: reducerId
    });

//const state = { cantidad: 2 };
const store = createStore(reducer);

//ReactDOM.render(<App />, document.getElementById('root')); //lo convertimos con Provider


ReactDOM.render(
<Provider store={store}>
     <App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
