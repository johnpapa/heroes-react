import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addVillainAction,
  deleteVillainAction,
  loadVillainsAction,
  selectVillainAction,
  updateVillainAction
} from '../store';

/** Custom hook for accessing Villain state in redux store */
function useVillains() {
  const dispatch = useDispatch();

  return {
    // Selectors
    villains: useSelector(state => state.villains.data),
    selectedVillain: useSelector(state => state.selectedVillain),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    addVillain: villain => dispatch(addVillainAction(villain)),
    deleteVillain: villain => dispatch(deleteVillainAction(villain)),
    getVillains: useCallback(() => dispatch(loadVillainsAction()), [dispatch]), // called within a useEffect()
    selectVillain: villain => dispatch(selectVillainAction(villain)),
    updateVillain: villain => dispatch(updateVillainAction(villain))
  };
}

export default useVillains;
