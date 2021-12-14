import axios from 'axios';


export const postBet = (betData) => {
    return axios.post('/api/bets/create', betData);
};