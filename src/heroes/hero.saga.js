import { put, takeEvery, call } from 'redux-saga/effects';
import { HEROES_LOADED, HEROES_LOADED_ERROR, HEROES_LOADING } from './hero.actions';
import { loadHeroesApi } from './hero.api';
const API = '/api';
const captains = console;

// Our worker Saga: will perform the async increment task
export function* loadingHeroesAsync() {
  try {
    const data = yield call(loadHeroesApi);
    const heroes = [...data]

    captains.log('Done with async work, dispatch data');
    yield put({ type: HEROES_LOADED, payload: heroes })
  } catch (err) {
    yield put({ type: HEROES_LOADED_ERROR, payload: err.message });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadingHeroesAsync() {
  captains.log("I'm hit first");
  yield takeEvery(HEROES_LOADING, loadingHeroesAsync)

}