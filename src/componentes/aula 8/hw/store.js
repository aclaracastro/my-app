//redux configurado
import { createStore } from 'redux';

const initialState = { count: 0};

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'increment': 
            return { count: state.count + 1 };
        case 'decrement':
            return { count : state.count - 1 };
        default:
            return state;
    }
};

const store = createStore(counterReducer);
export default store;