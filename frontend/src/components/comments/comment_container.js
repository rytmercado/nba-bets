import { connect } from 'react-redux';
import Comment from './comments';
import { getAllComments, createComment } from '../../actions/comment_actions'



const mSTP = state => ({
    user: state.session.user,
    game: state.game,
    comments: state.comments,
});

const mDTP = dispatch => ({
    getComments: (gameId) => dispatch(getAllComments(gameId)),
    postComment: (comment) => dispatch(createComment(comment)),
});

export default connect(mSTP, mDTP)(Comment)