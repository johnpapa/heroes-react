import React, { Component } from 'react';
const captains = console;

class HeroDetail extends Component {
  handleSave = () => {
    const hero = {
      id: this.idEl.value,
      name: this.nameEl.value,
      description: this.descriptionEl.value
    };
    this.props.handleSaveHero(hero);
  };

  render() {
    let { hero } = this.props;

    return (
      <div className="editarea">
        <div>
          <div className="field">
            <label className="label">id: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                defaultValue={hero.id}
                ref={el => (this.idEl = el)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">name: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g Colleen"
                defaultValue={hero.name}
                ref={el => (this.nameEl = el)}
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
                defaultValue={hero.description}
                ref={el => (this.descriptionEl = el)}
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
              <button className="button is-primary" onClick={this.handleSave}>
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
