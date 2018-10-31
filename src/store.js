import { combineReducers } from 'redux';
import { heroesReducer, heroReducer } from './heroes/hero.reducer';
import { villainsReducer } from './villains/villain.reducer';

const store = combineReducers({
  villains: villainsReducer,
  heroes: heroesReducer,
  selectedHero: heroReducer
});

export default store;
