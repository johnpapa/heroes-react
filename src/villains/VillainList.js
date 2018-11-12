import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../components';

class VillainList extends Component {
  selectVillain = e => {
    const index = +e.currentTarget.dataset.index;
    const { villains } = this.props;
    const villain = villains[index];

    this.props.handleSelectVillain(villain);
    this.props.history.push(`/villains/${villain.id}`);
  };

  deleteVillain = e => {
    const index = +e.currentTarget.dataset.index;
    const { villains } = this.props;
    const villain = villains[index];
    this.props.handleDeleteVillain(villain);
  };

  render() {
    let { villains /* , selectedVillain */ } = this.props;

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
                  onClick={this.deleteVillain}
                  label="Delete"
                  dataIndex={index}
                  dataId={villain.id}
                />
                <ButtonFooter
                  className="edit-item"
                  iconClasses="fas fa-edit"
                  onClick={this.selectVillain}
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
}

export default withRouter(VillainList);
