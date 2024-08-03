import {combineReducers, createStore, applyMiddleware} from 'redux';
import { basketReducer } from './reducers/basketReducer';
import { productReducer } from './reducers/productReducer';
import { thunk } from 'redux-thunk'
//combining reducers
const rootReducer = combineReducers({
    basketReducer,
    productReducer,
});

//creating and exporting the store
export default createStore(rootReducer, applyMiddleware(thunk));