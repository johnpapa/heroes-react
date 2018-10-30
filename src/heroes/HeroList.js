import React, { Component } from 'react';

import ButtonFooter from '../components/ButtonFooter';

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
                <ButtonFooter
                  className="delete-item"
                  iconClasses="fas fa-trash"
                  onClick={this.deleteHero}
                  label="Delete"
                  dataIndex={index}
                  dataId={hero.id}
                />
                <ButtonFooter
                  className="edit-item"
                  iconClasses="fas fa-edit"
                  onClick={this.selectHero}
                  label="Edit"
                  dataIndex={index}
                  dataId={hero.id}
                />
              </footer>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default HeroList;
