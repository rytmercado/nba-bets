import axios from 'axios'

export const getGames = () => (
    axios.get('api/games/index')
)

export const getGame = gameId => (
    axios.get(`api/games/${gameId}`)
)