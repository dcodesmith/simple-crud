import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduceImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle */

// NOTE - Add Chrome extension https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
// Need to change this to npm module and enable only in development mode

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduceImmutableStateInvariant()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
