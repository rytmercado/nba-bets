import { RECEIVE_BET } from '../actions/bet_actions';

const betsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BET:
            newState[action.bet.data._id] = action.bet.data;
            return newState;
        default: 
            return state;
    }

}

export default betsReducer;