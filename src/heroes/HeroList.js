import React, { Component } from 'react';

class HeroList extends Component {
  selectHero = e => {
    // console.log(e.currentTarget);
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const selectedHero = heroes[index];
    // console.log(selectedHero);
    this.props.handleSelectHero(selectedHero);
  };

  render() {
    let { heroes } = this.props;

    return (
      <ul className="list">
        {heroes.map((hero, index) => (
          <li key={hero.id} data-index={index} onClick={this.selectHero} role="button">
            <div className="columns is-variable is-2">
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right">
                    <a className="level-item" aria-label="delete">
                      <span className="icon is-small">
                        {/* <i className="fas fa-trash-alt" aria-hidden="true" /> */}
                        &nbsp;
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className="column">
                <article className="box content">
                  <div className="name">{hero.name}</div>
                  <div className="description">{hero.description}</div>
                </article>
              </div>
              <div className="column is-narrow icons">
                <nav className="level is-mobile">
                  <div className="level-right">
                    <a className="level-item" aria-label="delete">
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
