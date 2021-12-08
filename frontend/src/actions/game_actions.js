import * as GameApiUtil from '../util/game_api_util';

export const RECEIVE_GAMES = 'RECEIVE_GAMES';

const receiveGames = (games) => ({
    type: RECEIVE_GAMES,
    games
});

export const getGames = () => dispatch => (
    GameApiUtil.getGames()
        .then(games => dispatch(receiveGames(games)))
);