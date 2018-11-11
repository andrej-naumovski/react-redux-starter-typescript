import { createStore, Store } from 'redux';
import rootReducer from '../reducers/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

/**
 * Creates the Redux store, adds middleware and returns the store.
 * @returns {Store} - the configured Redux store.
 */
export default function configureStore(): Store<{}, any> {
  const store = createStore(
    rootReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
