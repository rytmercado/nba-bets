import { postComment, fetchGameComments } from '../util/chat_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

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
        .then(comment => {
            dispatch(receiveComment(comment))
        })
)
