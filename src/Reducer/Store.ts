import { combineReducers } from "@reduxjs/toolkit";
import ShowImages from "./ShowImages";
import { createStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  Images: ShowImages,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(reducer);

export default store;
