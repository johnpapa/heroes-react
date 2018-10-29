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
    let { heroes /* , selectedHero */ } = this.props;

    return (
      <div className="panel">
        <h3 className="panel-heading">Hero List</h3>
        <div className="panel-block">
          <ul className="list">
            {heroes.map((hero, index) => (
              <li key={hero.id} role="presentation">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <div className="name">{hero.name}</div>
                      <div className="description">{hero.description}</div>
                    </div>
                  </div>
                  <footer className="card-footer ">
                    <a
                      className="card-footer-item"
                      data-index={index}
                      onClick={this.selectHero}
                      aria-label="select"
                      role="button"
                      tabIndex={0}
                    >
                      <i className="fas fa-edit" />
                      Edit
                    </a>
                    <a
                      className="card-footer-item"
                      data-index={index}
                      data-hero-id={hero.id}
                      onClick={this.deleteHero}
                      aria-label="delete"
                      role="button"
                      tabIndex={0}
                    >
                      <i className="fas fa-trash" />
                      Delete
                    </a>
                  </footer>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroList;
