import React, { Component } from 'react';

class HeroDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { hero } = this.props;

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
              />
            </div>
          </div>
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button className="button is-light">Cancel</button>
            </div>
            <div className="control">
              <button className="button is-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetail;
