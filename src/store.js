import { combineReducers } from 'redux';
import { heroesReducer, selectedHeroReducer } from './heroes/hero.reducer';
import {
  villainsReducer,
  selectedVillainReducer
} from './villains/villain.reducer';

const store = combineReducers({
  villains: villainsReducer,
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer,
  selectedVillain: selectedVillainReducer
});

export default store;
