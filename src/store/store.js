import { createStore, combineReducers, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import { initReducer, appReducer, settingsReducer } from './reducers'

export default createStore(
  combineReducers({
    app: appReducer,
    settings: settingsReducer,
    init: initReducer,
  }),
  {},
  compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)
