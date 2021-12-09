import * as BetApiUtil from '../util/bet_api_util';

export const RECEIVE_BET = 'RECEIVE_BET'

const receiveBet = (bet) => ({
    type: RECEIVE_BET,
    bet
})

export const postBet = (bet) => dispatch => (
    BetApiUtil.postBet(bet)
        .then(bet => dispatch(receiveBet(bet)))
);
