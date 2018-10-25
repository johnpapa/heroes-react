import React, { Component } from 'react';
import './App.css';
import Heroes from './Heroes';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heroes and Villains</h1>
        <header className="header-bar"></header>
        <Heroes isVillain={true}></Heroes>
      </div>
    );
  }
}

export default App;
