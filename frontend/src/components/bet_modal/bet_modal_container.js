import { connect } from 'react-redux';
import BetModal from './bet_modal';
import { getGames } from '../../actions/game_actions'
import { postBet } from '../../actions/bet_actions'
import { resetSessionErrors } from '../../actions/session_actions';


const mSTP = state => ({
    games: Object.values(state.games),
    session: state.session,
    errors: Object.values(state.errors.session),
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    postBet: (bet) => dispatch(postBet(bet)),
    resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(BetModal);
