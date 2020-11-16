import thunk from "redux-thunk";
import {applyMiddleware, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {composeWithDevTools} from "redux-devtools-extension";

const initialState ={};
const middleWare =[thunk];
import rootReducer from './reducers';

const makeStore = context => createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));

export const wrapper = createWrapper(makeStore, {debug: true});