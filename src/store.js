import { combineReducers } from 'redux';
import { heroesReducer, heroReducer } from './heroes/hero.reducer';

const listReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      return [ ...state, { ...action.payload }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const store = combineReducers({
  list: listReducer,
  heroes: heroesReducer,
  selectedHero: heroReducer
});

export default store;