// import {
//     RECEIVE_BET_ERRORS,
//     RECEIVE_BET,
//   } from '../actions/bet_actions';
  
//   const _nullErrors = [];
  
//   const betErrorsReducer = (state = _nullErrors, action) => {
//     Object.freeze(state);
//     switch(action.type) {
//       case RECEIVE_BET_ERRORS:
//         return action.errors;
//       case RECEIVE_BET:
//         return _nullErrors;
//       default:
//         return state;
//     }
//   };
  
//   export default betErrorsReducer;