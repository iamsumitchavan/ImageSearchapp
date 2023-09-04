import { call, put } from "redux-saga/effects";
import { GetAllResponse } from "../Api";
import { AnyAction } from "@reduxjs/toolkit";
import { GetAllImages } from "../action";

function* FetchData(action: AnyAction): Generator<any, any, any> {
  const data = yield call(GetAllResponse, action.payload);

  yield put(GetAllImages(data));
}

export default FetchData;
