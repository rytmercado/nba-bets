import axios from 'axios'

export const getGames = () => (
    axios.get('api/games/index')
)