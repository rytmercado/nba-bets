import { RECEIVE_BET, RECEIVE_USER_BETS, CLEAR_BET } from '../actions/bet_actions';

const betsReducer = (state = [], action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BET:
            // console.log(action.bet.data.bet.user)
            // debugger
            // newState[action.bet.data.bet.user] = action.bet.data;
            // newState[action.currentUser.currency] -= action.bet.data.payout;
            newState[action.bet._id] = action.bet
            return newState;
            // return action.bet.data
        case RECEIVE_USER_BETS:
            // debugger
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