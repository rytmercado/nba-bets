import { RECEIVE_GAMES } from '../actions/game_actions';

const gamesReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_GAMES:
            return action.games.data;
        default:
            return state;
    }
}

export default gamesReducer;