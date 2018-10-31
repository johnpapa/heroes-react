import React, { Component } from 'react';

const Items = ({ items }) => (
  <div>
    {items.map(item => (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <div>{item.description}</div>
      </div>
    ))}
  </div>
);

const NoVillains = () => <div>No villains yet</div>;

class VillainList extends Component {
  componentDidMount = () => this.props.getVillains();

  render() {
    const { villains, getVillains } = this.props;
    return (
      <React.Fragment>
        <div>
          {!villains || villains.length === 0 ? (
            <NoVillains />
          ) : (
            <Items items={villains} />
          )}
          <button onClick={getVillains}>Load villains</button>
        </div>
      </React.Fragment>
    );
  }
}

export default VillainList;
