export const LOAD_VILLAIN = '[Villains] LOAD_VILLAIN';
export const LOAD_VILLAIN_SUCCESS = '[Villains] LOAD_VILLAIN_SUCCESS';
export const LOAD_VILLAIN_ERROR = '[Villains] LOAD_VILLAIN_ERROR';

export const UPDATE_VILLAIN = '[Villains] UPDATE_VILLAIN';
export const UPDATE_VILLAIN_SUCCESS = '[Villains] UPDATE_VILLAIN_SUCCESS';
export const UPDATE_VILLAIN_ERROR = '[Villains] UPDATE_VILLAIN_ERROR';

export const DELETE_VILLAIN = '[Villains] DELETE_VILLAIN';
export const DELETE_VILLAIN_SUCCESS = '[Villains] DELETE_VILLAIN_SUCCESS';
export const DELETE_VILLAIN_ERROR = '[Villains] DELETE_VILLAIN_ERROR';

export const ADD_VILLAIN = '[Villains] ADD_VILLAIN';
export const ADD_VILLAIN_SUCCESS = '[Villains] ADD_VILLAIN_SUCCESS';
export const ADD_VILLAIN_ERROR = '[Villains] ADD_VILLAIN_ERROR';

export const SELECT_VILLAIN = '[Villain] SELECT_VILLAIN';

export const selectVillainAction = villain => ({
  type: SELECT_VILLAIN,
  payload: villain
});
export const loadVillainsAction = () => ({ type: LOAD_VILLAIN });

export const updateVillainAction = villain => ({
  type: UPDATE_VILLAIN,
  payload: villain
});
export const deleteVillainAction = villain => ({
  type: DELETE_VILLAIN,
  payload: villain
});
export const addVillainAction = villain => ({
  type: ADD_VILLAIN,
  payload: villain
});
