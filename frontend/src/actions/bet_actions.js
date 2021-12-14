import * as BetApiUtil from '../util/bet_api_util';
import { receiveCurrentUser } from '../actions/session_actions'

export const RECEIVE_BET = 'RECEIVE_BET'

export const RECEIVE_USER_BETS = 'RECEIVE_USER_BETS'

const receiveBet = (bet) => ({
    type: RECEIVE_BET,
    bet
})

const receiveUserBets = (bets) => ({
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
);

export const getBets = userId => dispatch => (
    BetApiUtil.getBets(userId)
        .then( (bets) => dispatch(receiveUserBets(bets)))
)