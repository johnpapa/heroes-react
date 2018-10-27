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
            <label className="label" htmlFor="id">
              id:{' '}
            </label>
            <div className="control">
              <input
                name="id"
                className="input"
                type="text"
                defaultValue={hero.id}
                readOnly={hero.id}
                ref={el => (this.idEl = el)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="name">
              name:{' '}
            </label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="e.g Colleen"
                defaultValue={hero.name}
                ref={el => (this.nameEl = el)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="description">description: </label>
            <div className="control">
              <input
                name="description"
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
