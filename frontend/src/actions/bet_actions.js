import * as BetApiUtil from '../util/bet_api_util';
import { receiveCurrentUser, receiveUser } from '../actions/session_actions'

export const RECEIVE_BET = 'RECEIVE_BET'
export const RECEIVE_USER_BETS = 'RECEIVE_USER_BETS'
export const CLEAR_BET = 'CLEAR_BET'

const receiveBet = (bet) => ({
    type: RECEIVE_BET,
    bet
})

const receiveUserBets = (bets) => ({
    type: RECEIVE_USER_BETS,
    bets
})

const clearBet = (bet) => ({
    type: CLEAR_BET,
    bet
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

export const deleteBet = betId => dispatch => (
    BetApiUtil.deleteBet(betId)
        .then( (payload) => {
            // debugger
            dispatch(clearBet(payload.data.bet))
            dispatch(receiveUser(payload.data.user))
        })
)