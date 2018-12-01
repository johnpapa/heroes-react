import {
  SELECT_VILLAIN,
  LOAD_VILLAIN_SUCCESS,
  LOAD_VILLAIN,
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

let initState = {
  loading: false,
  data: [],
  error: void 0
};

export const villainsReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_VILLAIN:
      return { ...state, loading: true, error: '' };
    case LOAD_VILLAIN_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_VILLAIN_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UPDATE_VILLAIN:
      return {
        ...state,
        data: state.data.map(h => {
          if (h.id === action.payload.id) {
            state.loading = true;
          }
          return h;
        })
      };
    case UPDATE_VILLAIN_SUCCESS:
      return modifyVillainState(state, action.payload);
    case UPDATE_VILLAIN_ERROR:
      return { ...state, loading: false, error: action.payload };

    case DELETE_VILLAIN: {
      return {
        ...state,
        loading: true,
        data: state.data.filter(h => h !== action.payload)
      };
    }

    case DELETE_VILLAIN_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case DELETE_VILLAIN_ERROR: {
      return {
        ...state,
        data: [...state.data, action.payload.requestData],
        loading: false
      };
    }

    case ADD_VILLAIN: {
      return { ...state, loading: true };
    }

    case ADD_VILLAIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, { ...action.payload }]
      };
    }

    case ADD_VILLAIN_ERROR: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

const modifyVillainState = (villainState, villainChanges) => {
  return {
    ...villainState,
    loading: false,
    data: villainState.data.map(h => {
      if (h.id === villainChanges.id) {
        return { ...h, ...villainChanges };
      } else {
        return h;
      }
    })
  };
};

let initialSelectedVillain = null;

export const selectedVillainReducer = (
  state = initialSelectedVillain,
  action
) => {
  switch (action.type) {
    case SELECT_VILLAIN:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
};
