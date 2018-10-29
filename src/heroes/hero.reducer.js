import { HERO_SELECT, HEROES_LOADED, HEROES_LOADING, HEROES_LOADED_ERROR } from './hero.actions';

let initState = {
  loading: false,
  data: [],
  error: void 0
}

export const heroesReducer = (state = initState, action) => {
  switch(action.type) {
    case HEROES_LOADING:
      return { ...state, loading: true, error: '' }
    case HEROES_LOADED:
      return { ...state, loading: false, data: [...action.payload] }
    case HEROES_LOADED_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

let initialHero = null;

export const heroReducer = (state = initialHero, action) => {
  switch(action.type) {
    case HERO_SELECT:
      return {...action.payload};
    default:
      return state;
  }
}
