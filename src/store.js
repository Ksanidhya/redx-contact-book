import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = 
fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
.then(data => console.warn(data));

const contactReducer = (state = initialState,action) => {
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(contactReducer,composeWithDevTools());

export default store;