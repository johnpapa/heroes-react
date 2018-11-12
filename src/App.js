import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Async, HeaderBar, NavBar, NotFound } from './components';

const Heroes = () => import(/* webpackChunkName: "heroes" */ './heroes/Heroes');
const Villains = () =>
  import(/* webpackChunkName: "villains" */ './villains/Villains');

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column">
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Switch>
              <Redirect from="/" exact to="/heroes" />
              <Route
                path="/heroes"
                component={() => <Async provider={Heroes} />}
              />
              <Route
                path="/villains"
                component={() => <Async provider={Villains} />}
              />
              {/* <Route
                path="/about"
                component={() => <Async provider={Villains} />}
              /> */}
              <Route exact path="**" component={NotFound} />
            </Switch>
            {/* </Suspense> */}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
