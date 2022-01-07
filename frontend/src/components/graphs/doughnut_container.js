import { connect } from 'react-redux';
import { getGameBets } from '../../actions/bet_actions';
import Doughnut from './doughnut';


const mSTP = state => ({

});

const mDTP = dispatch => ({
    fetchGameBets: (gameId) => dispatch(getGameBets(gameId)),
  });

export default connect(null, mDTP)(Doughnut);