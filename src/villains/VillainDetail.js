import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail } from '../components';

class VillainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      villain: Object.assign({}, this.props.villain)
    };
  }

  componentDidMount() {
    !this.props.villain && this.props.history.push('/villains');
  }

  handleSave = () => {
    const villain = {
      id: this.state.villain.id || null,
      name: this.state.villain.name,
      description: this.state.villain.description
    };
    this.props.handleSaveVillain(villain);
  };

  handleNameChange = e => {
    let villain = Object.assign({}, this.state.villain, {
      name: e.target.value
    });
    this.setState({ villain });
  };

  handleDescriptionChange = e => {
    let villain = Object.assign({}, this.state.villain, {
      description: e.target.value
    });
    this.setState({ villain });
  };

  render() {
    let { villain } = this.state;
    let { handleCancelVillain } = this.props;

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
              onChange={this.handleNameChange}
            />
            <InputDetail
              name="description"
              value={villain.description}
              placeholder="e.g dance fight!"
              onChange={this.handleDescriptionChange}
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
            onClick={this.handleSave}
            label="Save"
          />
        </footer>
      </div>
    );
  }
}

export default withRouter(VillainDetail);
