import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ModalYesNo from '../components/ModalYesNo';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';
// import { selectedHeroesOnly } from './hero.reducer';

import { connect } from 'react-redux';
import {
  loadHeroesAction,
  selectHeroAction,
  updateHeroAction,
  deleteHeroAction,
  addHeroAction
} from './hero.actions';

const captains = console;

class Heroes extends Component {
  state = {
    heroToDelete: null,
    showModal: false
  };

  componentDidMount() {
    this.props.getHeroes();
  }

  addHero = () => {
    this.props.selectHero({});
    this.props.history.push('/heroes/0'); // TODO: goes to /heroes/0 route
  };

  handleCancelHero = () => {
    this.props.history.push('/'); // TODO: goes to / route
    this.props.selectHero(null);
    this.setState({ heroToDelete: null });
  };

  handleDeleteHero = hero => {
    this.props.selectHero(null);
    this.setState({ showModal: true, heroToDelete: hero });
  };

  handleSaveHero = hero => {
    const { addHero, selectedHero, updateHero } = this.props;
    if (selectedHero && selectedHero.name) {
      // captains.log(this.state.selectedHero);
      captains.log(hero);
      updateHero(hero);
      this.handleCancelHero();
    } else {
      addHero(hero);
      this.handleCancelHero();
    }
  };

  handleSelectHero = selectedHero => {
    this.props.selectHero(selectedHero);
    captains.log(`you selected ${selectedHero.name}`);
  };

  handleModalReponse = e => {
    const { deleteHero } = this.props;
    const confirmDelete = e.target.dataset.modalResponse === 'yes';
    this.setState({ showModal: false });
    if (confirmDelete) {
      deleteHero(this.state.heroToDelete);
      this.handleCancelHero();
    }
  };

  render() {
    const { heroToDelete, showModal } = this.state;
    const { heroes, selectedHero, getHeroes } = this.props;

    return (
      <div className="content-container">
        <div className="content-title-group">
          <h2 className="title">Heroes</h2>
          <button
            className="button add-button"
            onClick={this.addHero}
            aria-label="add"
          >
            <i className="fas fa-plus" aria-hidden="true" />
          </button>
          <button
            className="button refresh-button"
            onClick={getHeroes}
            aria-label="refresh"
          >
            <i className="fas fa-sync" aria-hidden="true" />
          </button>
        </div>
        <div className="columns is-multiline is-variable">
          <div className="column is-6">
            <Switch>
              <Route
                exact
                path="/heroes"
                component={() => (
                  <HeroList
                    heroes={heroes}
                    selectedHero={selectedHero}
                    handleSelectHero={this.handleSelectHero}
                    handleDeleteHero={this.handleDeleteHero}
                  />
                )}
              />
              <Route
                path="/heroes/:id"
                component={() => {
                  return (
                    selectedHero && (
                      <HeroDetail
                        hero={selectedHero}
                        handleCancelHero={this.handleCancelHero}
                        handleSaveHero={this.handleSaveHero}
                        key={selectedHero.id}
                      />
                    )
                  );
                }}
              />
            </Switch>
          </div>
        </div>

        {showModal && (
          <ModalYesNo
            message={`Would you like to delete ${heroToDelete.name}?`}
            onClick={this.handleModalReponse}
          />
        )}
      </div>
    );
  }
}

// whatever is exposed here will become part of the components `props`
const mapStateToProps = state => {
  return {
    heroes: state.heroes.data,
    heroesLoading: state.heroes.loading,
    heroesLoadingError: state.heroes.error,
    selectedHero: state.selectedHero
  };
};

// whatever is exposed here will become part of the components `props`
const mapDispatchToProps = dispatch => {
  return {
    getHeroes: () => {
      dispatch(loadHeroesAction());
    },
    selectHero: hero => {
      dispatch(selectHeroAction(hero));
    },
    updateHero: hero => {
      dispatch(updateHeroAction(hero));
    },
    deleteHero: hero => {
      dispatch(deleteHeroAction(hero));
    },
    addHero: hero => {
      dispatch(addHeroAction(hero));
    }
  };
};

const HeroesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);

export default HeroesContainer;
