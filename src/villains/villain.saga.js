import { put, takeEvery, call, fork } from 'redux-saga/effects';
import {
  LOAD_VILLAIN,
  LOAD_VILLAIN_SUCCESS,
  LOAD_VILLAIN_ERROR
} from './villain.actions';
import { loadVillainApi } from './villain.api';

export function* loadingVillainsAsync() {
  try {
    const data = yield call(loadVillainApi);
    const villains = [...data];

    yield put({ type: LOAD_VILLAIN_SUCCESS, payload: villains });
  } catch (err) {
    yield put({ type: LOAD_VILLAIN_ERROR, payload: err.message });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadingHeroesAsync() {
  yield takeEvery(LOAD_VILLAIN, loadingVillainsAsync);
}

export function* rootSaga() {
  yield [fork(watchLoadingHeroesAsync)];
}
