import { combineReducers } from 'redux';
import betErrorsReducer from './bet_errors_reducer';

import SessionErrorsReducer from './session_errors_reducer';
import betErrorsReducer from './bet_errors_reducer';


const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  bet: betErrorsReducer,
});

export default errorsReducer;