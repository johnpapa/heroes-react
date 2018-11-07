export const LOAD_HERO = '[Heroes] LOAD_HERO';
export const LOAD_HERO_SUCCESS = '[Heroes] LOAD_HERO_SUCCESS';
export const LOAD_HERO_ERROR = '[Heroes] LOAD_HERO_ERROR';

export const UPDATE_HERO = '[Heroes] UPDATE_HERO';
export const UPDATE_HERO_SUCCESS = '[Heroes] UPDATE_HERO_SUCCESS';
export const UPDATE_HERO_ERROR = '[Heroes] UPDATE_HERO_ERROR';

export const DELETE_HERO = '[Heroes] DELETE_HERO';
export const DELETE_HERO_SUCCESS = '[Heroes] DELETE_HERO_SUCCESS';
export const DELETE_HERO_ERROR = '[Heroes] DELETE_HERO_ERROR';

export const ADD_HERO = '[Heroes] ADD_HERO';
export const ADD_HERO_SUCCESS = '[Heroes] ADD_HERO_SUCCESS';
export const ADD_HERO_ERROR = '[Heroes] ADD_HERO_ERROR';

export const SELECT_HERO = '[Hero] SELECT_HERO';

export const selectHeroAction = hero => ({ type: SELECT_HERO, payload: hero });
export const loadHeroesAction = () => ({ type: LOAD_HERO });

export const updateHeroAction = hero => ({ type: UPDATE_HERO, payload: hero });
export const deleteHeroAction = hero => ({ type: DELETE_HERO, payload: hero });
export const addHeroAction = hero => ({ type: ADD_HERO, payload: hero });
