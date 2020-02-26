import React from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../components';

function VillainList({
  handleDeleteVillain,
  handleSelectVillain,
  villains,
  history
}) {
  function selectVillain(e) {
    const villain = getSelectedVillain(e);
    handleSelectVillain(villain);
    history.push(`/villains/${villain.id}`);
  }

  function deleteVillain(e) {
    const villain = getSelectedVillain(e);
    handleDeleteVillain(villain);
  }

  function getSelectedVillain(e) {
    const index = +e.currentTarget.dataset.index;
    return villains[index];
  }

  return (
    <ul className="list">
      {villains.map((villain, index) => (
        <li key={villain.id} role="presentation">
          <div className="card">
            <CardContent
              name={villain.name}
              description={villain.description}
            />
            <footer className="card-footer">
              <ButtonFooter
                className="delete-item"
                iconClasses="fas fa-trash"
                onClick={deleteVillain}
                label="Delete"
                dataIndex={index}
                dataId={villain.id}
              />
              <ButtonFooter
                className="edit-item"
                iconClasses="fas fa-edit"
                onClick={selectVillain}
                label="Edit"
                dataIndex={index}
                dataId={villain.id}
              />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(VillainList);
