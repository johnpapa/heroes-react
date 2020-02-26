import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail } from '../components';

function VillainDetail({
  villain: initVillain,
  handleCancelVillain,
  handleSaveVillain,
  history
}) {
  const [villain, setVillain] = useState(Object.assign({}, initVillain));

  useEffect(() => {
    if (!villain) {
      history.push('/villains'); // no villain, bail out of Details
    }
  }, [villain, history]);

  function handleSave() {
    const chgVillain = { ...villain, id: villain.id || null };
    handleSaveVillain(chgVillain);
  }

  function handleNameChange(e) {
    setVillain({ ...villain, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setVillain({ ...villain, description: e.target.value });
  }

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {villain.name}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {villain.id && (
            <InputDetail name="id" value={villain.id} readOnly="true" />
          )}
          <InputDetail
            name="name"
            value={villain.name}
            placeholder="e.g Colleen"
            onChange={handleNameChange}
          />
          <InputDetail
            name="description"
            value={villain.description}
            placeholder="e.g dance fight!"
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <footer className="card-footer ">
        <ButtonFooter
          className="cancel-button"
          iconClasses="fas fa-undo"
          onClick={handleCancelVillain}
          label="Cancel"
        />
        <ButtonFooter
          className="save-button"
          iconClasses="fas fa-save"
          onClick={handleSave}
          label="Save"
        />
      </footer>
    </div>
  );
}

export default withRouter(VillainDetail);
