import { combineReducers } from "@reduxjs/toolkit";
import ShowImages from "./ShowImages";
import { createStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import { GETQUERY } from "../action";
import FetchData from "../Sagas/FetchData";
import { debounce } from "redux-saga/effects";
import { applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  Images: ShowImages,
});

const sagaMiddleWare = createSagaMiddleWare();

function* rootSaga() {
  yield debounce(200, GETQUERY, FetchData);
}

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

export default store;

sagaMiddleWare.run(rootSaga);
