import axios from "axios";
import React, { Component } from "react";
import HeroDetail from "./HeroDetail";
import HeroList from "./HeroList";

// const API = 'http://localhost:8626/api';
const API = "/api";
const captains = console;

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      selectedHero: {}
    };
    // this.handleCancelHero = this.handleCancelHero.bind(this); // dont need these if you use arrow functions
    // this.handleSaveHero = this.handleSaveHero.bind(this);
    // this.handleSelectHero = this.handleSelectHero.bind(this);
  }

  componentDidMount() {
    // this.props.isVillain = true; // this will throw
    this.getHeroes();
  }

  addHero = () => {};

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
    this.setState({ selectedHero: {} });
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

  render() {
    let { heroes, selectedHero } = this.state;

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
      </div>
    );
  }
}

export default Heroes;
