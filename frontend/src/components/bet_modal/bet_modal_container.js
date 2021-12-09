import { connect } from 'react-redux';
import BetModal from './bet_modal';
import { getGames } from '../../actions/game_actions'
import { postBet } from '../../actions/bet_actions'


const mSTP = state => ({
    games: Object.values(state.games),
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    postBet: () => dispatch(postBet())
});

export default connect(mSTP, mDTP)(BetModal);
