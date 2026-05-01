import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../components';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';
import useHeroes from './useHeroes';

const captains = console;

function Heroes() {
  const navigate = useNavigate();
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
    navigate('/heroes/0');
  }

  function handleCancelHero() {
    navigate('/');
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
          <Routes>
            <Route
              index
              element={
                <HeroList
                  heroes={heroes}
                  selectedHero={selectedHero}
                  handleSelectHero={handleSelectHero}
                  handleDeleteHero={handleDeleteHero}
                />
              }
            />
            <Route
              path=":id"
              element={
                <HeroDetail
                  hero={selectedHero}
                  handleCancelHero={handleCancelHero}
                  handleSaveHero={handleSaveHero}
                />
              }
            />
          </Routes>
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
