import { connect } from 'react-redux';
import Comment from './comments';
import { getAllComments, createComment } from '../../actions/comment_actions'



const mSTP = (state, ownProps) => ({
    user: state.session.user,
    game: ownProps.g,
});

const mDTP = dispatch => ({
    getComments: (gameId) => dispatch(getAllComments(gameId)),
    postComment: (comment) => dispatch(createComment(comment)),
});

export default connect(mSTP, mDTP)(Comment)