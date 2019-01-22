import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const configureStore = () => {
  const middlewares = [thunk];
  const extensions = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(reducers, extensions);
};
