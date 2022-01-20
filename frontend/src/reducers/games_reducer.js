import { RECEIVE_GAMES, RECEIVE_GAME } from '../actions/game_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions'

const gamesReducer = (state={}, action) => {
    Object.freeze(state);
    const oldState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_GAMES:
          return action.games.data;
        case RECEIVE_GAME:
          return action.game.data;
        case RECEIVE_COMMENTS:
          // is just recieving a singular game 
          return Object.assign({},action.comments.data ,oldState)
        default:
          return state;
    }
}

export default gamesReducer;