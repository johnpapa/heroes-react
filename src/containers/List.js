import React from 'react';
import {connect} from 'react-redux';

import List from '../components/List';

const mapStateToProps = (state) => {
  return {
    items: state.list,
    heroes: state.heroes.data
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHeroes: () => {
      dispatch({ type: '[Heroes] loading' })
    }
  };
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;