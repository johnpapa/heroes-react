import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import app from './store';
import { watchLoadingHeroesAsync } from './heroes/hero.saga';

// create and configure reduxer middleware ( saga is a middleware )
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  app,
  applyMiddleware(sagaMiddleware)
)

// trigger saga to start
sagaMiddleware.run(watchLoadingHeroesAsync)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
