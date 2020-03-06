import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addHeroAction,
  deleteHeroAction,
  loadHeroesAction,
  selectHeroAction,
  updateHeroAction
} from '../store';

/** Custom hook for accessing Hero state in redux store */
function useHeroes() {
  const dispatch = useDispatch();

  return {
    // Selectors
    heroes: useSelector(state => state.heroes.data),
    selectedHero: useSelector(state => state.selectedHero),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    addHero: hero => dispatch(addHeroAction(hero)),
    deleteHero: hero => dispatch(deleteHeroAction(hero)),
    getHeroes: useCallback(() => dispatch(loadHeroesAction()), [dispatch]), // called within a useEffect()
    selectHero: hero => dispatch(selectHeroAction(hero)),
    updateHero: hero => dispatch(updateHeroAction(hero))
  };
}

export default useHeroes;
