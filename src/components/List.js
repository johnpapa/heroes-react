import React from 'react';

const Items = ({ items }) => (
  <div>
    {items.map(item => <div key={item.id}>
      <h2>{item.name}</h2>
      <div>{item.description}</div>
    </div>)}
  </div>
);

const NoItems = () => (
  <div>No items yet</div>
);

const NoHeroes = () => (
  <div>No heroes yet</div>
);

const List = ({ items, heroes, loadHeroes }) => (
  <React.Fragment>
    <div>
    {!items || items.length === 0 ? <NoItems /> : <Items items={items} />}
    {!heroes || heroes.length === 0 ? <NoHeroes />: <Items items={heroes} /> }
    <button onClick={loadHeroes} >Load heroes</button>
    </div>
  </React.Fragment>
);


export default List;