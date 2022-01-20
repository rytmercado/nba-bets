import axios from "axios"

export const postComment = (commentData) => {
    return axios.post('api/comments/create', commentData)
}

export const fetchGameComments = (gameId) => {
    return axios.get(`api/comments/${gameId}/index`)
}

//req.body.userId
//req.body.gameId
//req.body.body
//req.body.commentId
export const updateComment = (commentData) => {
  return axios.patch('api/comments/update', commentData)
}

//gameId, commentId, userId
export const deleteComment = (commentData) => {
  // debugger 
  return axios.delete(`api/comments/${commentData.gameId}/delete/${commentData.commentId}/${commentData.userId}`)
}