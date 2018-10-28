import React, { Component } from 'react';
import Modal from '../Modal';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';

import {connect} from 'react-redux';
import { selectHero, loadHeroes } from './hero.actions';
import { putHeroesApi, postHeroesApi, deleteHeroApi } from './hero.api';

const captains = console;

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroToDelete: null,
      showModal: false
    };
  }

  componentDidMount() {
    this.props.getHeroes();
  }

  addHero = () => {
    // this.setState({ selectedHero: {} });
    this.props.selectHero(null);
  };

  handleCancelHero = () => {
    this.props.selectHero(null);
    this.setState({ heroToDelete: null });
  };

  handleDeleteHero = hero => {
    this.props.selectHero(null);
    this.setState({ showModal: true, heroToDelete: hero });
  };

  handleSaveHero = hero => {
    const { selectedHero, getHeroes } = this.props;
    if (selectedHero) {
      putHeroesApi(hero).then(() => {
        this.handleCancelHero();
        getHeroes();
      });
    } else {
      postHeroesApi(hero).then(() => {
        this.handleCancelHero();
        getHeroes();
      });
    }
  };

  handleSelectHero = selectedHero => {
    this.props.selectHero(selectedHero);
    captains.log(`you selected ${selectedHero.name}`);
  };

  handleModalReponse = e => {
    const { getHeroes } = this.props;
    const confirmDelete = e.target.dataset.modalResponse == 'yes';
    this.setState({ showModal: false });
    if (confirmDelete) {
      deleteHeroApi(this.state.heroToDelete).then(() => {
        this.handleCancelHero();
        getHeroes();
      });
    }
  };

  render() {
    const { heroToDelete, showModal } = this.state;
    const { heroes, selectedHero, getHeroes } = this.props;

    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Heroes</div>
              <div className="field is-grouped is-grouped-left">
                <div className="control">
                  <button className="button is-light" onClick={this.addHero}>
                    Add
                  </button>
                  <button className="button is-light" onClick={getHeroes}>
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-multiline is-8 is-variable">
          <div className="column is-6">
            <div className="panel">
              <p className="panel-heading">Hero List</p>
              <div className="panel-block">
                <HeroList
                  heroes={heroes}
                  handleSelectHero={this.handleSelectHero}
                  handleDeleteHero={this.handleDeleteHero}
                />
              </div>
            </div>
          </div>

          <div className="column is-6">
            {this.props.selectedHero && 
              <div className="panel">
                <p className="panel-heading">Details</p>
                <div className="panel-block">
                  <HeroDetail
                    hero={selectedHero}
                    handleCancelHero={this.handleCancelHero}
                    handleSaveHero={this.handleSaveHero.bind(this)}
                    key={selectedHero.id}
                  />
                </div>
              </div>
            }
          </div>
        </div>

        {this.props.heroesLoading && 
          <div>show a spinner here...</div>
        }

        {this.props.heroesLoadingError &&
          <div>something went wrong loading heroes</div>
        }

        {showModal &&
          <Modal>
            <h1>Would you like to delete {heroToDelete.name}?</h1>
            <div className="buttons">
              <button
                className="button is-light"
                data-modal-response="yes"
                onClick={this.handleModalReponse}
              >
                Yes
              </button>
              <button
                className="button is-light"
                data-modal-response="no"
                onClick={this.handleModalReponse}
              >
                No
              </button>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

// whatever is exposed here will become part of the components `props`
const mapStateToProps = (state) => {
  return {
    heroes: state.heroes.data,
    heroesLoading: state.heroes.loading,
    heroesLoadingError: state.heroes.error,
    selectedHero: state.selectedHero
  };
}

// whatever is exposed here will become part of the components `props`
const mapDispatchToProps = (dispatch) => {
  return {
    getHeroes: () => {
      dispatch(loadHeroes())
    },
    selectHero: hero => {
      dispatch(selectHero(hero))
    }
  };
}

const HeroesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);

export default HeroesContainer;
