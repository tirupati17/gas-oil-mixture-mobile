import { createStore, combineReducers, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import appReducer from './appReducer';
import initReducer from './initReducer';

export default createStore(
  combineReducers({
    app: appReducer,
    init: initReducer,
  }),
  {},
  compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
