import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ModalYesNo } from '../components';
import {
  loadVillainsAction,
  selectVillainAction,
  updateVillainAction,
  deleteVillainAction,
  addVillainAction
} from './villain.actions';
import VillainList from './VillainList';
import VillainDetail from './VillainDetail';

const captains = console;

class Villains extends Component {
  state = {
    villainToDelete: null,
    showModal: false
  };

  componentDidMount() {
    this.props.getVillains();
  }

  addVillain = () => {
    this.props.selectVillain({});
    this.props.history.push('/villains/0');
  };

  handleCancelVillain = () => {
    this.props.history.push('/villains');
    this.props.selectVillain(null);
    this.setState({ villainToDelete: null });
  };

  handleDeleteVillain = villain => {
    this.props.selectVillain(null);
    this.setState({ showModal: true, villainToDelete: villain });
  };

  handleSaveVillain = villain => {
    const { addVillain, selectedVillain, updateVillain } = this.props;
    if (selectedVillain && selectedVillain.name) {
      captains.log(villain);
      updateVillain(villain);
      this.handleCancelVillain();
    } else {
      addVillain(villain);
      this.handleCancelVillain();
    }
  };

  handleSelectVillain = selectedVillain => {
    this.props.selectVillain(selectedVillain);
    captains.log(`you selected ${selectedVillain.name}`);
  };

  handleModalReponse = e => {
    const { deleteVillain } = this.props;
    const confirmDelete = e.target.dataset.modalResponse === 'yes';
    this.setState({ showModal: false });
    if (confirmDelete) {
      deleteVillain(this.state.villainToDelete);
      this.handleCancelVillain();
    }
  };

  render() {
    const { villainToDelete, showModal } = this.state;
    const { villains, selectedVillain, getVillains } = this.props;

    return (
      <div className="content-container">
        <div className="content-title-group">
          <h2 className="title">Villains</h2>
          <button
            className="button add-button"
            onClick={this.addVillain}
            aria-label="add"
          >
            <i className="fas fa-plus" aria-hidden="true" />
          </button>
          <button
            className="button refresh-button"
            onClick={getVillains}
            aria-label="refresh"
          >
            <i className="fas fa-sync" aria-hidden="true" />
          </button>
        </div>
        <div className="columns is-multiline is-variable">
          <div className="column is-6">
            <Switch>
              <Route
                exact
                path="/villains"
                component={() => (
                  <VillainList
                    villains={villains}
                    selectedVillain={selectedVillain}
                    handleSelectVillain={this.handleSelectVillain}
                    handleDeleteVillain={this.handleDeleteVillain}
                  />
                )}
              />
              <Route
                path="/villains/:id"
                component={() => {
                  return (
                    <VillainDetail
                      villain={selectedVillain}
                      handleCancelVillain={this.handleCancelVillain}
                      handleSaveVillain={this.handleSaveVillain}
                      key={selectedVillain && selectedVillain.id}
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
            onClick={this.handleModalReponse}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    villains: state.villains.data,
    villainsLoading: state.villains.loading,
    villainsLoadingError: state.villains.error,
    selectedVillain: state.selectedVillain
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVillains: () => {
      dispatch(loadVillainsAction());
    },
    selectVillain: villain => {
      dispatch(selectVillainAction(villain));
    },
    updateVillain: villain => {
      dispatch(updateVillainAction(villain));
    },
    deleteVillain: villain => {
      dispatch(deleteVillainAction(villain));
    },
    addVillain: villain => {
      dispatch(addVillainAction(villain));
    }
  };
};

const VillainsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Villains);

export default VillainsContainer;
