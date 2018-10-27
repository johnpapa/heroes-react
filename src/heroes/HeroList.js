import React, { Component } from 'react';

class HeroList extends Component {
  selectHero = e => {
    // console.log(e.currentTarget);
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const hero = heroes[index];
    // console.log(hero);
    this.props.handleSelectHero(hero);
  };

  deleteHero = e => {
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const hero = heroes[index];
    this.props.handleDeleteHero(hero);
  };

  render() {
    let { heroes } = this.props;

    return (
      <ul className="list">
        {heroes.map((hero, index) => (
          <li key={hero.id} role="presentation">
            <div className="columns is-variable is-2">
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right">&nbsp;</div>
                </nav>
              </div>
              <div className="column">
                <a
                  data-index={index}
                  onClick={this.selectHero}
                  aria-label="select"
                  role="button"
                >
                  <article className="box content">
                    <div className="name">{hero.name}</div>
                    <div className="description">{hero.description}</div>
                  </article>
                </a>
              </div>
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right">
                    <a
                      className="level-item"
                      data-index={index}
                      aria-label="delete"
                      className="level-item"
                      onClick={this.deleteHero}
                      role="button"
                    >
                      <span className="icon is-small">
                        <i className="fas fa-trash-alt" aria-hidden="true" />
                      </span>
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
