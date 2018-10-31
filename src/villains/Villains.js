import { connect } from 'react-redux';

import { loadVillainsAction } from './villain.actions';
import VillainList from './VillainList';

const mapStateToProps = state => {
  return {
    villains: state.villains.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVillains: () => {
      dispatch(loadVillainsAction());
    }
  };
};

const Villains = connect(
  mapStateToProps,
  mapDispatchToProps
)(VillainList);

export default Villains;
