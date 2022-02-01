import { connect } from 'react-redux';
import BigBetModal from './big_bet_modal';
import { getGames } from '../../actions/game_actions'
import { postBet } from '../../actions/bet_actions'
import { fetchUser } from '../../actions/session_actions';



const mSTP = (state, ownProps) => ({
    game: ownProps.g,
    session: state.session,
    errors: state.errors,
    userId: state.session.user._id
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    postBet: (bet) => dispatch(postBet(bet)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP, mDTP)(BigBetModal)