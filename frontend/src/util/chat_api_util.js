import axios from "axios"

export const postComment = (commentData) => {
    return axios.post('api/comments/create', commentData)
}

export const fetchGameComments = (gameId) => {
    return axios.get(`api/comments/${gameId}/index`)
}