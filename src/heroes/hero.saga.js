import { put, takeEvery, call, fork } from 'redux-saga/effects';
import {
  HEROES_LOADED,
  HEROES_LOAD_ERROR,
  HEROES_LOADING,
  HEROES_UPDATING,
  HEROES_UPDATED,
  HEROES_UPDATE_ERROR
} from './hero.actions';
import { loadHeroesApi, updateHeroApi } from './hero.api';
const captains = console;

// Our worker Saga: will perform the async increment task
export function* loadingHeroesAsync() {
  try {
    const data = yield call(loadHeroesApi);
    const heroes = [...data];

    captains.log('Done with async work, dispatch data');
    yield put({ type: HEROES_LOADED, payload: heroes });
  } catch (err) {
    yield put({ type: HEROES_LOAD_ERROR, payload: err.message });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadingHeroesAsync() {
  captains.log(`I'm hit first`);
  yield takeEvery(HEROES_LOADING, loadingHeroesAsync);
}

export function* updatingHeroAsync({payload}) {
  try {
    const data = yield call(updateHeroApi, payload );
    const updatedHero = data

    captains.log('Done with async work, dispatch data');
    yield put({ type: HEROES_UPDATED, payload: updatedHero });
  } catch (err) {
    yield put({ type: HEROES_UPDATE_ERROR, payload: err.message });
  }
}

export function* watchUpdatingHeroAsync() {
  captains.log(`I'm hit too`);
  yield takeEvery(HEROES_UPDATING, updatingHeroAsync);
}

export function* rootSaga() {
  yield [
    fork(watchLoadingHeroesAsync),
    fork(watchUpdatingHeroAsync)
  ];
}
