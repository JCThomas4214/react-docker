import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import dbInitialState from './db-initial-state';
import {clockReducer} from './reducers/clock/clock';

const dev = process.env.NODE_ENV !== 'production'

export const rootReducer = combineReducers({
  clock: clockReducer
});

export function initializeStore (initialState = dbInitialState) {
  return dev === true ? createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware))) :
    createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
}
