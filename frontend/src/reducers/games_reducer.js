import { RECEIVE_GAMES, RECEIVE_GAME } from '../actions/game_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions'

const gamesReducer = (state={}, action) => {
    Object.freeze(state);
    const arrayState = Array.from(state);

    switch(action.type){
        case RECEIVE_GAMES:
          return action.games.data;
        case RECEIVE_GAME:
          return action.game.data;
        case RECEIVE_COMMENTS:
          //finds game and replaces it with updated comments
          const index = arrayState.findIndex(game => game._id === action.comments.data._id)
          arrayState[index] = action.comments.data; 
          return arrayState
        default:
          return state;
    }
}

export default gamesReducer;