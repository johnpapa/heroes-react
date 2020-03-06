import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../components';
import VillainDetail from './VillainDetail';
import VillainList from './VillainList';
import useVillains from './useVillains';

const captains = console;

function Villains({ history }) {
  const [villainToDelete, setVillainToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    addVillain,
    deleteVillain,
    getVillains,
    villains,
    selectVillain,
    selectedVillain,
    updateVillain
  } = useVillains();

  useEffect(() => {
    getVillains();
  }, [getVillains]);

  function addNewVillain() {
    selectVillain({});
    history.push('/villains/0');
  }

  function handleCancelVillain() {
    history.push('/villains');
    selectVillain(null);
    setVillainToDelete(null);
  }

  function handleDeleteVillain(villain) {
    selectVillain(null);
    setVillainToDelete(villain);
    setShowModal(true);
  }

  function handleSaveVillain(villain) {
    if (selectedVillain && selectedVillain.name) {
      captains.log(villain);
      updateVillain(villain);
    } else {
      addVillain(villain);
    }
    handleCancelVillain();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleDeleteFromModal() {
    setShowModal(false);
    deleteVillain(villainToDelete);
    handleCancelVillain();
  }

  function handleSelectVillain(selectedVillain) {
    selectVillain(selectedVillain);
    captains.log(`you selected ${selectedVillain.name}`);
  }

  function handleRefresh() {
    handleCancelVillain();
    getVillains();
  }

  return (
    <div className="content-container">
      <ListHeader
        title="Villains"
        handleAdd={addNewVillain}
        handleRefresh={handleRefresh}
        routePath="/villains"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route
              exact
              path="/villains"
              component={() => (
                <VillainList
                  villains={villains}
                  selectedVillain={selectedVillain}
                  handleSelectVillain={handleSelectVillain}
                  handleDeleteVillain={handleDeleteVillain}
                />
              )}
            />
            <Route
              exact
              path="/villains/:id"
              component={() => {
                return (
                  <VillainDetail
                    villain={selectedVillain}
                    handleCancelVillain={handleCancelVillain}
                    handleSaveVillain={handleSaveVillain}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>

      {showModal && (
        <ModalYesNo
          message={`Would you like to delete ${villainToDelete.name}?`}
          onNo={handleCloseModal}
          onYes={handleDeleteFromModal}
        />
      )}
    </div>
  );
}

export default Villains;
