import React, { Component } from 'react';

class HeroList extends Component {
  constructor(props) {
    super(props);
    this.selectHero = this.selectHero.bind(this);
  }

  selectHero = e => {
    // console.log(e.currentTarget);
    const index = +e.currentTarget.dataset.id;
    const {heroes} = this.props
    const selectedHero = heroes[index];
    // console.log(selectedHero);
  }

  render() {
    let {heroes} = this.props;

    return (
      <ul className="list">
      {
        heroes.map((hero, index) =>
          <li key={hero.id} data-id={index} onClick={this.selectHero}>
            <div className="columns is-variable is-2">
              <div className="column">
                <article className="box content">
                  <div className="name">{hero.name}</div>
                  <div className="saying">{hero.saying}</div>
                </article>
              </div>
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right">
                    <a className="level-item" aria-label="delete">
                      <span className="icon is-small">
                        <i className="fas fa-trash-alt" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </li>
        )
      }
      </ul>
    );
  }
}

export default HeroList;
