import React, { Component } from 'react';
// const captains = console;

class HeroDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: props.hero
    };
  }

  static getDerivedStateFromProps(props /*, state */) {
    return {hero: props.hero};
  }

  handleHeroChange = newHeroFragment => {
    const hero = {
      hero: Object.assign(this.state.hero, newHeroFragment)
    };
    this.setState({ hero });
  };

  // handleIdChange = event => this.handleHeroChange({ id: event.target.value });

  handleDescriptionChange = event =>
    this.handleHeroChange({ description: event.target.value });

  handleNameChange = event =>
    this.handleHeroChange({ name: event.target.value });

  render() {
    let { hero } = this.state;

    return (
      <div className="editarea">
        <div>
          <div className="field">
            <label className="label">id: </label>
            <div className="control">
              <input className="input" type="text" readOnly value={hero.id} />
            </div>
          </div>
          <div className="field">
            <label className="label">name: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g Colleen"
                value={hero.name}
                onChange={this.handleNameChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">description: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g dance fight!"
                value={hero.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
          </div>
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button
                className="button is-light"
                onClick={this.props.handleCancelHero}
              >
                Cancel
              </button>
            </div>
            <div className="control">
              <button
                className="button is-primary"
                onClick={this.props.handleSaveHero}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetail;
