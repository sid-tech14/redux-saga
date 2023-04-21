import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import counterReducer from "./counter/counter.reducer";
import { counterSaga } from "./counter/counter.saga";

const combinedReducers = combineReducers({ counterReducer });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([counterSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;