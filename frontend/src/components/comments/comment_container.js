import { connect } from 'react-redux';
import Comment from './comments';
import { createComment } from '../../actions/comment_actions'
import {getGame} from '../../actions/game_actions'



const mSTP = (state, ownProps) => ({
    user: state.session.user,
});

const mDTP = dispatch => ({
    getGame: (gameId) => dispatch(getGame(gameId)),
    postComment: (comment) => dispatch(createComment(comment)),
});

export default connect(mSTP, mDTP)(Comment)