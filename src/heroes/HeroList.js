import React, { Component } from 'react';

class HeroList extends Component {
  selectHero = e => {
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const hero = heroes[index];

    this.props.handleSelectHero(hero);
  };

  deleteHero = e => {
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const hero = heroes[index];
    this.props.handleDeleteHero(hero);
  };

  render() {
    let { heroes, selectedHero } = this.props;

    return (
      <ul className="list">
        {heroes.map((hero, index) => (
          <li key={hero.id} role="presentation">
            <div className="columns is-variable is-2 is-single-line">
              <div className="column is-narrow icons" />
              <div className="column">
                <a
                  data-index={index}
                  onClick={this.selectHero}
                  aria-label="select"
                  role="button"
                  tabIndex={0}
                  >
                  <article
                    className={
                      'box content list-item ' +
                      (selectedHero && selectedHero.id === hero.id
                        ? 'selected'
                        : '')
                    }
                  >
                    <div className="name">{hero.name}</div>
                    <div className="description">{hero.description}</div>
                  </article>
                </a>
              </div>
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right delete-item">
                    <a
                      className="level-item button-icon"
                      data-index={index}
                      data-hero-id={hero.id}
                      onClick={this.deleteHero}
                      aria-label="delete"
                      role="button"
                      tabIndex={0}
                    >
                      <i className="fas fa-trash-alt" aria-hidden="true" />
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default HeroList;
