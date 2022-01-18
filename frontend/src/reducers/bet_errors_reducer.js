import {
    RECEIVE_BET_ERRORS,
    RECEIVE_BET,
    CLEAR_BET_ERRORS
  } from '../actions/bet_actions';
  
  const _nullErrors = [];
  
  const betErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_BET_ERRORS:
        return action.errors;
      case RECEIVE_BET:
        return _nullErrors;
      case CLEAR_BET_ERRORS:
        return [];
      default:
        return state;
    }
  };
  
export default betErrorsReducer;
