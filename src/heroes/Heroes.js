import React, { Component } from 'react';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';

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

  render() {
    let {heroes, person: p} = this.state;

    return (
      <div>

      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="title">Heroes</div>
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
          <div className="field is-grouped is-grouped-left">
            <div className="control">
              <button className="button is-light">Add</button>
            </div>
          </div>
          <HeroList heroes={heroes}></HeroList>
        </div>
        <div className="column is-6">
          <div className="panel">
            <p className="panel-heading">
              Details
            </p>
            <div className="panel-block">
              <HeroDetail></HeroDetail>
            </div>
          </div>
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
