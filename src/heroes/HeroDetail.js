import React, { Component } from 'react';

class HeroDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: Object.assign({}, this.props.hero)
    };
  }

  handleSave = () => {
    const hero = {
      id: this.state.hero.id || null,
      name: this.state.hero.name,
      description: this.state.hero.description
    };
    this.props.handleSaveHero(hero);
  };

  handleNameChange = e => {
    let hero = Object.assign({}, this.state.hero, { name: e.target.value });
    this.setState({ hero });
  };

  handleDescriptionChange = e => {
    let hero = Object.assign({}, this.state.hero, {
      description: e.target.value
    });
    this.setState({ hero });
  };

  render() {
    let { hero } = this.props;

    return (
      <div className="editarea">
        <div>
          {hero.id ? (
            <div className="field">
              <label className="label" htmlFor="id">
                id
              </label>
              <div className="control">
                <input
                  name="id"
                  className="input"
                  type="text"
                  defaultValue={hero.id}
                  readOnly
                />
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="field">
            <label className="label" htmlFor="name">
              name
            </label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="e.g Colleen"
                defaultValue={hero.name}
                onChange={this.handleNameChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="description">
              description:{' '}
            </label>
            <div className="control">
              <input
                name="description"
                className="input"
                type="text"
                placeholder="e.g dance fight!"
                defaultValue={hero.description}
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
              <button className="button is-primary" onClick={() => this.handleSave()}>
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
