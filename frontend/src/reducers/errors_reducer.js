import { combineReducers } from 'redux';
import betErrorsReducer from './bet_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  bet: betErrorsReducer,
});

export default errorsReducer;