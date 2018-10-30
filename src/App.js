import { Router } from '@reach/router';
import React, { Component } from 'react';
import Header from './Header';
import Heroes from './heroes/Heroes';
import List from './containers/List';
import Nav from './components/Nav';
import './styles.scss';
import 'bulma/css/bulma.css';

const NotFound = () => <p>Sorry, nothing here</p>;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="section columns">
          <Nav />
          <main className="column">
            <Router>
              <Heroes path="heroes" />
              <List path="villains" />
              <NotFound default />
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
