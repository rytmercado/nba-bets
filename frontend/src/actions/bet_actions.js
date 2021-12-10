import * as BetApiUtil from '../util/bet_api_util';
import { receiveCurrentUser } from '../actions/session_actions'

export const RECEIVE_BET = 'RECEIVE_BET'

const receiveBet = (bet) => ({
    type: RECEIVE_BET,
    bet
})

export const postBet = bet => dispatch => (
    BetApiUtil.postBet(bet)
        .then( (payload) => {
            debugger
            dispatch(receiveBet(payload.data.bet))
            dispatch(receiveCurrentUser(payload.data.user))
        })
);
