import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const loginSession= (state = null, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'LOGIN': //Guardaremos el data con la info del user, token, etc.
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
    loginSession: loginSession, 
    form: formReducer  // necesario para los forms, no hay función, son propias de redux-form.

});


const store = createStore(reducers);

export default store;