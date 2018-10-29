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
              <footer className="card-footer">
                <a
                  className="card-footer-item delete-item"
                  data-index={index}
                  data-hero-id={hero.id}
                  onClick={this.deleteHero}
                  aria-label="delete"
                  role="button"
                  tabIndex={0}
                >
                  <i className="fas fa-trash" aria-hidden="true"/>
                  <span>Delete</span>
                </a>
                <a
                  className="card-footer-item edit-item"
                  data-index={index}
                  data-hero-id={hero.id}
                  onClick={this.selectHero}
                  aria-label="edit"
                  role="button"
                  tabIndex={0}
                >
                  <i className="fas fa-edit" aria-hidden="true"/>
                  <span>Edit</span>
                </a>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default HeroList;
