import axios from 'axios';

export const postBet = (betData) => {
    return axios.post('api/bets/create', betData)
};

export const getBets = (userId) => {
    return axios.get(`api/bets/index/${userId}`)
}

export const deleteBet = (betId) => {
    return axios.delete(`api/bets/${betId}`)
}

export const getGamesBets = (gameId) => {
    return axios.get(`api/bets/games/index/${gameId}`)
}



//when games > "Final" status > we need to trigger actions in frontend and backend
//frontend: games that are "Final" which users bet on them
// get that through /api/bets/index
//next step
//take these bets and take payout, with that payout we add what the users local currency should be
//update users currency locally, just in the frontend
//use the route below /api/users/handshake
//pass up user currency and userid to backend
//will get response and need to hcekc if that resqpose = to value of request
//if don't equal each other throw error 

// export const 
