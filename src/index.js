import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import 'bulma/css/bulma.css';
import './styles.scss';

const middleWare = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));




ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));