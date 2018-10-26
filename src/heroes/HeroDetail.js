import React, { Component } from "react";

class HeroDetail extends Component {
  render() {
    return (
      <div className="editarea">
        <div>
          <div className="editfields">
            <div className="field">
              <label className="label">id: </label>
              <div className="control">
                <input className="input" type="text" placeholder="e.g 275" />
                <label className="value">selectedHero.id</label>
              </div>
            </div>
            <div className="field">
              <label className="label">name: </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g Colleen"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">saying: </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g dance fight!"
                />
              </div>
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
