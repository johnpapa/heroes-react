import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Heroes from './heroes/Heroes';
import Villains from './villains/Villains';
import { Header, Nav, NotFound } from './components';
import './styles.scss';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="section columns">
          <Nav />
          <main className="column">
            <Switch>
              <Redirect from="/" exact to="/heroes" />
              <Route path="/heroes" component={Heroes} />
              <Route path="/villains" component={Villains} />
              <Route exact path="**" component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
