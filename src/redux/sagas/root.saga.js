import { put, takeLatest, all } from "redux-saga/effects";
import { actionWatcher } from "./news.saga";

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
