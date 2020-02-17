import React from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../components';

function HeroList({ handleDeleteHero, handleSelectHero, heroes, history }) {
  function selectHero(e) {
    const hero = getSelectedHero(e);
    handleSelectHero(hero);
    history.push(`/heroes/${hero.id}`);
  }

  function deleteHero(e) {
    const hero = getSelectedHero(e);
    handleDeleteHero(hero);
  }

  function getSelectedHero(e) {
    const index = +e.currentTarget.dataset.index;
    return heroes[index];
  }

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
                onClick={deleteHero}
                label="Delete"
                dataIndex={index}
                dataId={hero.id}
              />
              <ButtonFooter
                className="edit-item"
                iconClasses="fas fa-edit"
                onClick={selectHero}
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

export default withRouter(HeroList);
