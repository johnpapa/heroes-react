import {
  LOAD_VILLAIN_SUCCESS,
  LOAD_VILLAIN,
  LOAD_VILLAIN_ERROR
} from './villain.actions';

let initState = {
  loading: false,
  data: [], // villains go here
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

    default:
      return state;
  }
};
