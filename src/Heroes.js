import React, { Component } from 'react';

// changin css classes - use {} to put a ternary in here
// pass args to clic  https://reactjs.org/docs/handling-events.html
// routing & navigation (reach router)
// use obejct literal, not a class (or look at prop types or a type def)
// look up prop types for validation of props

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [{id: 1, saying: "yo", name: 'Initial Joe'}],
      person: {
        title: 'my title',
        age: 24
      }
    };
    this.getMoreHeroes = this.getMoreHeroes.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.selectHero = this.selectHero.bind(this);
  }

  componentDidMount() {
    // this.props.isVillain = true; // this will throw
    this.getHeroes();
  }

  getHeroes() {
    // TODO - use axios here
    const newHeroes = [
      {id: 21, saying: "hi", name: 'John'},
      {id: 22, saying: "hi", name: 'Brian'},
      {id: 23, saying: "hi", name: 'Sarah'}
    ];
    const newState = {
      heroes: [...this.state.heroes, ...newHeroes]
    };
    this.setState(newState);
  }

  handleTitleChange(event) {
    const newTitle = event.target.value;
    const newPerson = {person: Object.assign(this.state.person, {title: newTitle} )};
    console.log(newPerson);
    this.setState(newPerson);
  }

  getMoreHeroes() {
    // TODO - use axios here
    const newHeroes = [
      {id: 11, saying: "hi", name: 'Simona'},
      {id: 12, saying: "hi", name: 'Asim'},
      {id: 13, saying: "hi", name: 'Burke'}
    ];
    const newState = {
      heroes: [...this.state.heroes, ...newHeroes]
    };
    this.setState(newState);
  }

  selectHero(e) {
    // const heroId = +e.target.dataset.heroId;
    const index = +e.target.dataset.index;
    const selectedHero = this.state.heroes[index];
    // const selectedHero = this.state.heroes.filter(h => h.id === heroId)[0];
    console.log(selectedHero);
  }

  render() {
    let {heroes: h, person: p} = this.state;

    return (
      <div>
        <ul className="heroes">
        {
          h.map((hero, index) =>
              <div className="hero-element">
              <button className="delete-button">X</button>
                <li key={hero.id} data-index={index} onClick={this.selectHero}>
                  <div className="badge">{hero.id}</div>
                  <div className="name">{hero.name}</div>
                  <div className="saying">{hero.saying}</div>
                </li>
              </div>
          )
        }
        </ul>
        <hr/>
        <button onClick={this.getMoreHeroes}>Refresh</button>
        <input value={p.title} onChange={this.handleTitleChange}></input>
        <span>{p.title}</span>
        {(this.props.isVillain) ? 'IS VILLAIN' : 'IS HERO'}

      </div>
    );
  }
}

export default Heroes;
