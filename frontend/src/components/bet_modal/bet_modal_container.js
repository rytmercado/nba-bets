import { connect } from 'react-redux';
import { getGames } from '../../actions/game_actions';
import { postBet } from '../../actions/bet_actions';
import BetModal from './bet_modal';

const mSTP = state => ({
    games: Object.values(state.games),
    session: state.session,
    errors: state.bet.errors,
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    postBet: (bet) => dispatch(postBet(bet)),
    resetErrors: () => dispatch(resetSessionErrors())
});

export default connect(mSTP, mDTP)(BetModal)