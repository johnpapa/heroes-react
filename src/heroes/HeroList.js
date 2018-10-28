import React, { Component } from 'react';

class HeroList extends Component {
  state = {
    selectedHero: {}
  };

  selectHero = e => {
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const selectedHero = heroes[index];
    this.setState({ selectedHero });

    this.props.handleSelectHero(selectedHero);
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
                    className={'box content ' + (this.state.selectedHero.id === hero.id ? 'selected' : '')}
                  >
                    <div className="name">{hero.name}</div>
                    <div className="description">{hero.description}</div>
                  </article>
                </a>
              </div>
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right">
                    <a
                      className="level-item button-icon"
                      data-index={index}
                      onClick={this.deleteHero}
                      aria-label="delete"
                      role="button"
                      tabIndex={0}
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
