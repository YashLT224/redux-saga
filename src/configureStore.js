import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import newsreducer from "./redux/reducers/a.reducer";
import rootSaga from "./redux/sagas/root.saga";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  newsreducer: newsreducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
