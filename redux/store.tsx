import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { State } from "../interfaces/state";

const initialState = {};
const middleWare: Array<any> = [thunk];
const makeStore: MakeStore = (context: Context) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
export const wrapper = createWrapper<State>(makeStore, { debug: true });
