import { RECEIVE_BET } from '../actions/bet_actions';

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
        default: 
            return state;
    }

}

export default betsReducer;