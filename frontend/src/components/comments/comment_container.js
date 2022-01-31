import { connect } from 'react-redux';
import Comment from './comments';
import { createComment, patchComment, removeComment } from '../../actions/comment_actions'
import {getGame} from '../../actions/game_actions'



const mSTP = (state, ownProps) => ({
    user: state.session.user,
    game: ownProps.g,
});

const mDTP = dispatch => ({
    getGame: (gameId) => dispatch(getGame(gameId)),
    postComment: (comment) => dispatch(createComment(comment)),
    updateComment: comment => dispatch(patchComment(comment)),
    deleteComment: commentData => dispatch(removeComment(commentData))
});

export default connect(mSTP, mDTP)(Comment)