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
    let { hero, handleCancelHero } = this.props;

    return (
      <div className="card editarea">
        <header className="card-header">
          <p className="card-header-title">{hero.name} Details</p>
        </header>
        <div className="card-content">
          <div className="content">
            {hero.id ? (
              <div className="field">
                <label className="label" htmlFor="id">
                  id
                </label>
                <input
                  name="id"
                  className="input"
                  type="text"
                  defaultValue={hero.id}
                  readOnly
                />
              </div>
            ) : (
              ''
            )}
            <div className="field">
              <label className="label" htmlFor="name">
                name
              </label>
              <input
                name="name"
                className="input"
                type="text"
                placeholder="e.g Colleen"
                defaultValue={hero.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="description">
                description:
              </label>
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
        </div>
        <footer className="card-footer ">
          <a
            className="card-footer-item cancel-button"
            onClick={handleCancelHero}
            aria-label="select"
            role="button"
            tabIndex={0}
          >
            <i className="fas fa-undo" />
            <span>Cancel</span>
          </a>
          <a
            className="card-footer-item save-button"
            onClick={() => this.handleSave()}
            aria-label="delete"
            role="button"
            tabIndex={0}
          >
            <i className="fas fa-save" />
            <span>Save</span>
          </a>
        </footer>
      </div>
    );
  }
}

export default HeroDetail;
