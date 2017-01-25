/* eslint import/default: 0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './containers'
import './styles/Base.less';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
