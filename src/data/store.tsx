import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga  from 'redux-saga';
import modules from './modules';
import sagas from './modules/sagas';

const initialState = {};
const sagaMiddleware = reduxSaga();

const store = createStore(
  modules,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

export default store;
