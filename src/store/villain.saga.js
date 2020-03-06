import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_VILLAIN,
  LOAD_VILLAIN_SUCCESS,
  LOAD_VILLAIN_ERROR,
  UPDATE_VILLAIN,
  UPDATE_VILLAIN_SUCCESS,
  UPDATE_VILLAIN_ERROR,
  DELETE_VILLAIN,
  DELETE_VILLAIN_SUCCESS,
  DELETE_VILLAIN_ERROR,
  ADD_VILLAIN,
  ADD_VILLAIN_SUCCESS,
  ADD_VILLAIN_ERROR
} from './villain.actions';
import {
  addVillainApi,
  deleteVillainApi,
  loadVillainsApi,
  updateVillainApi
} from './villain.api';

export function* loadingVillainsAsync() {
  try {
    const data = yield call(loadVillainsApi);
    const villaines = [...data];

    yield put({ type: LOAD_VILLAIN_SUCCESS, payload: villaines });
  } catch (err) {
    yield put({ type: LOAD_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchLoadingVillainsAsync() {
  yield takeEvery(LOAD_VILLAIN, loadingVillainsAsync);
}

export function* updatingVillainAsync({ payload }) {
  try {
    const data = yield call(updateVillainApi, payload);
    const updatedVillain = data;

    yield put({ type: UPDATE_VILLAIN_SUCCESS, payload: updatedVillain });
  } catch (err) {
    yield put({ type: UPDATE_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchUpdatingVillainAsync() {
  yield takeEvery(UPDATE_VILLAIN, updatingVillainAsync);
}

export function* deletingVillainAsync({ payload }) {
  try {
    yield call(deleteVillainApi, payload);

    yield put({ type: DELETE_VILLAIN_SUCCESS, payload: null });
  } catch (err) {
    yield put({ type: DELETE_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchDeletingVillainAsync() {
  yield takeEvery(DELETE_VILLAIN, deletingVillainAsync);
}

export function* addingVillainAsync({ payload }) {
  try {
    const data = yield call(addVillainApi, payload);
    const addedVillain = data;

    yield put({ type: ADD_VILLAIN_SUCCESS, payload: addedVillain });
  } catch (err) {
    yield put({ type: ADD_VILLAIN_ERROR, payload: err.message });
  }
}

export function* watchAddingVillainAsync() {
  yield takeEvery(ADD_VILLAIN, addingVillainAsync);
}

export function* villainSaga() {
  yield all([
    watchLoadingVillainsAsync(),
    watchUpdatingVillainAsync(),
    watchDeletingVillainAsync(),
    watchAddingVillainAsync()
  ]);
}
