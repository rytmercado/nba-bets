import * as BetApiUtil from '../util/bet_api_util';
import { receiveCurrentUser } from '../actions/session_actions'

export const RECEIVE_BET = 'RECEIVE_BET'
export const RECEIVE_BET_ERRORS = 'RECEIVE_BET_ERRORS'
export const RECEIVE_USER_BETS = 'RECEIVE_USER_BETS'

export const receiveBet = (bet) => ({
    type: RECEIVE_BET,
    bet
})

export const receiveErrors = errors => ({
    type: RECEIVE_BET_ERRORS,
    errors
});

export const receiveUserBets = (bets) => ({
    type: RECEIVE_USER_BETS,
    bets
})

export const postBet = bet => dispatch => (
    BetApiUtil.postBet(bet)
        .then( (payload) => {
            // debugger
            dispatch(receiveBet(payload.data.bet))
            dispatch(receiveCurrentUser(payload.data.user))
        })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
);
