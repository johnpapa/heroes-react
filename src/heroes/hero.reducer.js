import {
  HERO_SELECT,
  HEROES_LOADED,
  HEROES_LOADING,
  HEROES_LOAD_ERROR,
  HEROES_UPDATING,
  HEROES_UPDATED,
  HEROES_UPDATE_ERROR
} from './hero.actions';

let initState = {
  loading: false,
  data: [], // heroes go here
  error: void 0
};

export const heroesReducer = (state = initState, action) => {
  switch (action.type) {
    case HEROES_LOADING:
      return { ...state, loading: true, error: '' };
    case HEROES_LOADED:
      return { ...state, loading: false, data: [...action.payload] };
    case HEROES_LOAD_ERROR:
      return { ...state, loading: false, error: action.payload };

    case HEROES_UPDATING:
      return {
        ...state,
        data: state.data.map(h => {
          if (h.id === action.payload.id) {
            state.loading = true;
          }
          return h;
        })
      };
    case HEROES_UPDATED:
      return modifyHeroState(state, action.payload);
    case HEROES_UPDATE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const modifyHeroState = (heroState, heroChanges) => {
  return {
    ...heroState,
    loading: false,
    data: heroState.data.map(h => {
      if (h.id === heroChanges.id) {
        return { ...h, ...heroChanges };
      } else {
        return h;
      }
    })
  };
};

let initialSelectedHero = null;

export const heroReducer = (state = initialSelectedHero, action) => {
  switch (action.type) {
    case HERO_SELECT:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
