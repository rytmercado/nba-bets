import { RECEIVE_BET, RECEIVE_USER_BETS, CLEAR_BET, RECEIVE_GAME_BETS } from '../actions/bet_actions';

const betsReducer = (state = [], action) => {
    Object.freeze(state);
    const newState = Array.from(state);

    switch(action.type) {
        case RECEIVE_BET:
            //needs to return an array 
            // newState[action.bet._id] = action.bet
            // return newState;
            newState.push(action.bet);
            return newState; 
            // return action.bet.data
        case RECEIVE_USER_BETS:
            // debugger
            return action.bets.data
        case RECEIVE_GAME_BETS:
            return action.bets.data
        // case CLEAR_BET:
        //     // debugger
        //     delete newState[action.bet._id]
        //     return newState
        default: 
            return state;
    }

}

export default betsReducer;