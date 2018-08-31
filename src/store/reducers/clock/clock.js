import dbInitialState from '../../db-initial-state';
import {clockActionTypes} from '../../actions/clock/clock';

// REDUCERS
export const clockReducer = (state = dbInitialState, action) => {
    switch (action.type) {
      case clockActionTypes.TICK:
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        })
      case clockActionTypes.INCREMENT:
        return Object.assign({}, state, {
          count: state.count + 1
        })
      case clockActionTypes.DECREMENT:
        return Object.assign({}, state, {
          count: state.count - 1
        })
      case clockActionTypes.RESET:
        return Object.assign({}, state, {
          count: dbInitialState.count
        })
      default: return state
    }
  }