import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../components';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';
import useHeroes from './useHeroes';

const captains = console;

function Heroes({ history }) {
  const [heroToDelete, setHeroToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    addHero,
    deleteHero,
    getHeroes,
    heroes,
    selectHero,
    selectedHero,
    updateHero
  } = useHeroes();

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  function addNewHero() {
    selectHero({});
    history.push('/heroes/0');
  }

  function handleCancelHero() {
    history.push('/');
    selectHero(null);
    setHeroToDelete(null);
  }

  function handleDeleteHero(hero) {
    selectHero(null);
    setHeroToDelete(hero);
    setShowModal(true);
  }

  function handleSaveHero(hero) {
    if (selectedHero && selectedHero.name) {
      captains.log(hero);
      updateHero(hero);
    } else {
      addHero(hero);
    }
    handleCancelHero();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleDeleteFromModal() {
    setShowModal(false);
    deleteHero(heroToDelete);
    handleCancelHero();
  }

  function handleSelectHero(selectedHero) {
    selectHero(selectedHero);
    captains.log(`you selected ${selectedHero.name}`);
  }

  function handleRefresh() {
    handleCancelHero();
    getHeroes();
  }

  return (
    <div className="content-container">
      <ListHeader
        title="Heroes"
        handleAdd={addNewHero}
        handleRefresh={handleRefresh}
        routePath="/heroes"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route
              exact
              path="/heroes"
              component={() => (
                <HeroList
                  heroes={heroes}
                  selectedHero={selectedHero}
                  handleSelectHero={handleSelectHero}
                  handleDeleteHero={handleDeleteHero}
                />
              )}
            />
            <Route
              exact
              path="/heroes/:id"
              component={() => {
                return (
                  <HeroDetail
                    hero={selectedHero}
                    handleCancelHero={handleCancelHero}
                    handleSaveHero={handleSaveHero}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>

      {showModal && (
        <ModalYesNo
          message={`Would you like to delete ${heroToDelete.name}?`}
          onNo={handleCloseModal}
          onYes={handleDeleteFromModal}
        />
      )}
    </div>
  );
}

export default Heroes;
