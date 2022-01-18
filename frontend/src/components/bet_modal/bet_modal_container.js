import { connect } from 'react-redux';
import BetModal from './bet_modal';
import { getGames } from '../../actions/game_actions';
import { postBet, clearBetErrors } from '../../actions/bet_actions';
import { fetchUser } from '../../actions/session_actions';



const mSTP = state => ({
    games: Object.values(state.games),
    session: state.session,
    errors: state.errors.bet,
    userId: state.session.user._id
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    postBet: (bet) => dispatch(postBet(bet)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearBetErrors: () => dispatch(clearBetErrors())
});

export default connect(mSTP, mDTP)(BetModal)
