import { combineReducers } from 'redux';
import { heroesReducer, selectedHeroReducer } from './hero.reducer';
import { selectedVillainReducer, villainsReducer } from './villain.reducer';

export * from './hero.actions';
export * from './hero.reducer';
export * from './hero.saga';
export * from './villain.actions';
export * from './villain.reducer';
export * from './villain.saga';

const store = combineReducers({
  villains: villainsReducer,
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer,
  selectedVillain: selectedVillainReducer
});

export default store;
