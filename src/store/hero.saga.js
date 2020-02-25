import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_HERO,
  LOAD_HERO_SUCCESS,
  LOAD_HERO_ERROR,
  UPDATE_HERO,
  UPDATE_HERO_SUCCESS,
  UPDATE_HERO_ERROR,
  DELETE_HERO,
  DELETE_HERO_SUCCESS,
  DELETE_HERO_ERROR,
  ADD_HERO,
  ADD_HERO_SUCCESS,
  ADD_HERO_ERROR
} from './hero.actions';
import {
  addHeroApi,
  deleteHeroApi,
  loadHeroesApi,
  updateHeroApi
} from './hero.api';

// Our worker Saga: will perform the async increment task
export function* loadingHeroesAsync() {
  try {
    const data = yield call(loadHeroesApi);
    const heroes = [...data];

    yield put({ type: LOAD_HERO_SUCCESS, payload: heroes });
  } catch (err) {
    yield put({ type: LOAD_HERO_ERROR, payload: err.message });
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoadingHeroesAsync() {
  yield takeEvery(LOAD_HERO, loadingHeroesAsync);
}

export function* updatingHeroAsync({ payload }) {
  try {
    const data = yield call(updateHeroApi, payload);
    const updatedHero = data;

    yield put({ type: UPDATE_HERO_SUCCESS, payload: updatedHero });
  } catch (err) {
    yield put({ type: UPDATE_HERO_ERROR, payload: err.message });
  }
}

export function* watchUpdatingHeroAsync() {
  yield takeEvery(UPDATE_HERO, updatingHeroAsync);
}

export function* deletingHeroAsync({ payload }) {
  try {
    yield call(deleteHeroApi, payload);

    yield put({ type: DELETE_HERO_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_HERO_ERROR, payload: err.message });
  }
}

export function* watchDeletingHeroAsync() {
  yield takeEvery(DELETE_HERO, deletingHeroAsync);
}

export function* addingHeroAsync({ payload }) {
  try {
    const data = yield call(addHeroApi, payload);
    const addedHero = data;

    yield put({ type: ADD_HERO_SUCCESS, payload: addedHero });
  } catch (err) {
    yield put({ type: ADD_HERO_ERROR, payload: err.message });
  }
}

export function* watchAddingHeroAsync() {
  yield takeEvery(ADD_HERO, addingHeroAsync);
}

export function* heroSaga() {
  yield all([
    watchLoadingHeroesAsync(),
    watchUpdatingHeroAsync(),
    watchDeletingHeroAsync(),
    watchAddingHeroAsync()
  ]);
}
