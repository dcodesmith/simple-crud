import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduceImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduceImmutableStateInvariant())
  );
}
