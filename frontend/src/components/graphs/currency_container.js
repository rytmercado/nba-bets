import { connect } from 'react-redux';
import CurrencyBar from './currency_bar';
import { getGameBets } from '../../actions/bet_actions';

const mSTP = (state) => ({
    game: state.games,
});

const mDTP = dispatch => ({
    fetchGameBets: (gameId) => dispatch(getGameBets(gameId)),
});

export default connect(mSTP, mDTP)(CurrencyBar);