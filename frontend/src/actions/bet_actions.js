import * as BetApiUtil from '../util/bet_api_util';
import { receiveCurrentUser, receiveUser } from '../actions/session_actions'

export const RECEIVE_BET = 'RECEIVE_BET'
export const RECEIVE_USER_BETS = 'RECEIVE_USER_BETS'
export const CLEAR_BET = 'CLEAR_BET'
export const RECEIVE_BET_ERRORS = 'RECEIVE_BET_ERRORS'
export const CLEAR_BET_ERRORS = 'CLEAR_BET_ERRORS'
export const RECEIVE_GAME_BETS = 'RECEIVE_GAME_BETS'

const receiveBet = (bet) => ({
    type: RECEIVE_BET,
    bet
})

const receiveGameBets = (bets) => ({
    type: RECEIVE_GAME_BETS,
    bets
})

const receiveUserBets = (bets) => ({
    type: RECEIVE_USER_BETS,
    bets
})

const clearBet = (bet) => ({
    type: CLEAR_BET,
    bet
})

const clearErrors = () =>({
    type: CLEAR_BET_ERRORS
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_BET_ERRORS,
    errors
})

export const clearBetErrors = () => dispatch => {
    dispatch(clearErrors());
}


export const postBet = bet => dispatch => (
    BetApiUtil.postBet(bet)
        .then( (payload) => {
            // debugger
            return dispatch(receiveBet(payload.data.bet))
            // dispatch(receiveCurrentUser(payload.data.user))
        })
        .catch(err => {
            // console.log(err.response.data.msg)
            // dispatch(receiveErrors(Object.values(err.response.data)));
            dispatch(receiveErrors(err.response.data.msg))
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

export const getGameBets = gameId => dispatch => (
    BetApiUtil.getGamesBets(gameId)
        .then(bets => dispatch(receiveGameBets(bets)))
)