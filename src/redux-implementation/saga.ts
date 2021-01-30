import { all } from 'redux-saga/effects';

import { saga as messagesSaga } from '../ducks/messages';

export default function* rootSaga() {
  yield all([
    messagesSaga()
  ])
};