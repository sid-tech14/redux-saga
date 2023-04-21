import { put, takeLatest } from "redux-saga/effects";
import { DECREMENT_ASYNC, INCREMENT, INCREMENT_ASYNC, decrement, increment } from "./counter.action";


function* incrementAsyncSaga() {
    console.log("increment saga called");
    // yield new Promise((resolve) => setTimeout(resolve, 1000));
    yield put(increment());
}

function* decrementAsyncSaga() {
    console.log("decrement saga called");
    // yield new Promise((resolve) => setTimeout(resolve, 1000));
    yield put(decrement());
}

export function* counterSaga() {
    yield takeLatest(INCREMENT_ASYNC, incrementAsyncSaga);
    yield takeLatest(DECREMENT_ASYNC, decrementAsyncSaga);
}