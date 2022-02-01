import { connect } from 'react-redux';
import BigGameModal from './big_game_modal';
import { getGames } from '../../actions/game_actions'
import { postBet } from '../../actions/bet_actions'



const mSTP = (state, ownProps) => ({
    game: ownProps.g,
    session: state.session,
    errors: state.errors,
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    postBet: (bet) => dispatch(postBet(bet)),
});

export default connect(mSTP, mDTP)(BigGameModal)