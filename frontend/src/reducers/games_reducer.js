import { RECEIVE_GAMES, RECEIVE_GAME } from '../actions/game_actions';

const gamesReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_GAMES:
            return action.games.data;
        case RECEIVE_GAME:
            return action.game.data;
        default:
            return state;
    }
}

export default gamesReducer;