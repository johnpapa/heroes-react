import {
  SELECT_HERO,
  LOAD_HERO_SUCCESS,
  LOAD_HERO,
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

let initState = {
  loading: false,
  data: [],
  error: void 0
};

export const heroesReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_HERO:
      return { ...state, loading: true, error: '' };
    case LOAD_HERO_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_HERO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_HERO:
      return {
        ...state,
        data: state.data.map(h => {
          if (h.id === action.payload.id) {
            state.loading = true;
          }
          return h;
        })
      };
    case UPDATE_HERO_SUCCESS:
      return modifyHeroState(state, action.payload);
    case UPDATE_HERO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_HERO: {
      return {
        ...state,
        loading: true,
        data: state.data.filter(h => h !== action.payload)
      };
    }

    case DELETE_HERO_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case DELETE_HERO_ERROR: {
      return {
        ...state,
        data: [...state.data, action.payload.requestData],
        loading: false
      };
    }

    case ADD_HERO: {
      return { ...state, loading: true };
    }

    case ADD_HERO_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, { ...action.payload }]
      };
    }

    case ADD_HERO_ERROR: {
      return { ...state, loading: false };
    }

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

export const selectedHeroReducer = (state = initialSelectedHero, action) => {
  switch (action.type) {
    case SELECT_HERO:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
