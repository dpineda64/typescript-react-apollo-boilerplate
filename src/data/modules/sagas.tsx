import { takeLatest } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';

function* testSaga() {
  yield put({ type: 'TEST' });
}

export default function* rootSaga() {
  // YOUR SAGAS HERE
  yield fork(testSaga);
}
