import { put, takeLatest, call, takeEvery, all } from "redux-saga/effects";
function* fetchNews(action) {
  try {
    const { data } = action;
    const json = yield fetch(
      // "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());
    yield put({ type: "NEWS_RECEIVED", json: json.articles });
  } catch (err) {
    console.log(err);
  }
}
export function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}
