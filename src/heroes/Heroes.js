import axios from 'axios';
import React, { Component } from 'react';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';

// const API = 'http://localhost:8626/api';
const API = '/api';
const captains = console;

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      selectedHero: {}
      // person: {
      //   title: 'my title',
      //   age: 24
      // }
    };
    // this.getHeroes = this.getHeroes.bind(this);
    // this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSelectHero = this.handleSelectHero.bind(this);
  }

  componentDidMount() {
    // this.props.isVillain = true; // this will throw
    this.getHeroes();
  }

  getHeroes = async () => {
    const newHeroes = await this.getHeroesApi();
    const heroes = [...this.state.heroes, ...newHeroes];
    this.setState({ heroes }, () => captains.log(this.state));
  };

  getHeroesApi = async () => {
    // let index = 1;
    const response = await axios.get(`${API}/heroes`);
    if (response.status !== 200) throw Error(response.message);
    return response.data;
  };

  handleSelectHero = selectedHero => {
    captains.log(`you selected ${selectedHero.name}`);
    this.setState({ selectedHero });
  };

  // handleTitleChange(event) {
  //   const newTitle = event.target.value;
  //   const newPerson = {
  //     person: Object.assign(this.state.person, { title: newTitle })
  //   };
  //   captains.log(newPerson);
  //   this.setState(newPerson);
  // }

  render() {
    // let { heroes, person: p } = this.state;
    let { heroes, selectedHero } = this.state;

    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Heroes</div>
              <div className="field is-grouped is-grouped-left">
                <div className="control">
                  <button className="button is-light">Add</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="level-right">
            <div className="level-item">
              <button type="button" className="button is-small">
                March 8, 2017 - April 6, 2017
              </button>
            </div>
          </div> */}
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
                  <HeroDetail hero={selectedHero} />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* <button onClick={this.getMoreHeroes}>Refresh</button>
          <input value={p.title} onChange={this.handleTitleChange}></input>
          <span>{p.title}</span>
          {(this.props.isVillain) ? 'IS VILLAIN' : 'IS HERO'} */}
      </div>
    );
  }
}

export default Heroes;
