import { takeEvery } from 'redux-saga';
import * as actions from './actions';

import { loadStart } from './fetching';

export default function* rootSaga(){
  yield takeEvery(actions.LOADING_START, loadStart);
}
