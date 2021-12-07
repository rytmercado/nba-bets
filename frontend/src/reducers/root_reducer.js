import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer'

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: errorsReducer
});

export default RootReducer;