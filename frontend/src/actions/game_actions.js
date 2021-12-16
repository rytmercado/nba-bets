import * as GameApiUtil from '../util/game_api_util';

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';

const receiveGames = (games) => ({
    type: RECEIVE_GAMES,
    games
});

const receiveGame = (game) => ({
    type: RECEIVE_GAME,
    game
})

export const getGames = () => dispatch => (
    GameApiUtil.getGames()
        .then(games => dispatch(receiveGames(games)))
);

export const getGame = (gameId) => dispatch => (
    GameApiUtil.getGame(gameId)
        .then(game => dispatch(receiveGame(game)))
)