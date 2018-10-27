import axios from 'axios';
import React, { Component } from 'react';
import Modal from '../Modal';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';

const API = '/api';
const captains = console;

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroToDelete: {},
      heroes: [],
      selectedHero: {},
      showModal: false
    };
  }

  componentDidMount() {
    this.getHeroes();
  }

  addHero = () => {
    // TODO - add
  };

  deleteHeroApi = async hero => {
    const response = await axios.delete(`${API}/hero/${hero.id}`);
    if (response.status !== 200) throw Error(response.message);
    return response.data;
  };

  getHeroes = async () => {
    const newHeroes = await this.getHeroesApi();
    const heroes = [...newHeroes];
    this.setState({ heroes }, () => captains.log(this.state));
  };

  getHeroesApi = async () => {
    const response = await axios.get(`${API}/heroes`);
    if (response.status !== 200) throw Error(response.message);
    return response.data;
  };

  putHeroesApi = async hero => {
    const response = await axios.put(`${API}/hero/${hero.id}`, hero);
    if (response.status !== 200) throw Error(response.message);
    return response.data;
  };

  handleCancelHero = () => {
    this.setState({ selectedHero: {}, heroToDelete: {} });
  };

  handleDeleteHero = hero => {
    this.setState({ showModal: true, heroToDelete: hero, selectedHero: {} });
  };

  handleSaveHero = hero => {
    this.putHeroesApi(hero).then(() => {
      this.handleCancelHero();
      this.getHeroes();
    });
  };

  handleSelectHero = selectedHero => {
    captains.log(`you selected ${selectedHero.name}`);
    this.setState({ selectedHero });
  };

  handleModalReponse = e => {
    const confirmDelete = e.target.dataset.modalResponse == 'yes';
    this.setState({ showModal: false });
    if (confirmDelete) {
      this.deleteHeroApi(this.state.heroToDelete).then(() => {
        this.handleCancelHero();
        this.getHeroes();
      });
    }
  };

  render() {
    let { heroes, heroToDelete, selectedHero, showModal } = this.state;

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
                  <button className="button is-light" onClick={this.getHeroes}>
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
            {selectedHero && selectedHero.name ? (
              <div className="panel">
                <p className="panel-heading">Details</p>
                <div className="panel-block">
                  <HeroDetail
                    hero={selectedHero}
                    handleCancelHero={this.handleCancelHero}
                    handleSaveHero={this.handleSaveHero}
                    key={selectedHero.id}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {showModal ? (
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
        ) : null}
      </div>
    );
  }
}

export default Heroes;
