import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer'
import gamesReducer from './games_reducer';
import betsReducer from './bets_reducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    bets: betsReducer,

});

export default rootReducer;