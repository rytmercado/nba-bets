import { postComment, deleteComment, fetchGameComments, updateComment } from '../util/chat_api_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const getAllComments = gameId => dispatch => (
    fetchGameComments(gameId)
        .then((comments) => {
            dispatch(receiveComments(comments))
        })
)

export const createComment = (comment) => dispatch => (
    postComment(comment)
        .then(game => {
            dispatch(receiveComments(game))
        })
)

export const patchComment = comment => dispatch => (
  updateComment(comment).then(
    game =>  dispatch(receiveComments(game))
  )
)

export const removeComment = commentData => dispatch => (
  deleteComment(commentData).then(game => 
   dispatch(receiveComments(game)) 
    )
)