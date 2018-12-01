import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../components';

class HeroList extends Component {
  selectHero = e => {
    const index = +e.currentTarget.dataset.index;
    const { heroes } = this.props;
    const hero = heroes[index];

    this.props.handleSelectHero(hero);
    this.props.history.push(`/heroes/${hero.id}`);
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
              <CardContent name={hero.name} description={hero.description} />
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

export default withRouter(HeroList);
