import { connect } from 'react-redux';
import { getGameBets } from '../../actions/bet_actions';
import OddsPercentageDoughnut from './odds_percentage_doughnut';


const mSTP = (state, ownProps) => ({
    data: ownProps.graphData,
    game: state.games,
});

const mDTP = dispatch => ({
  
});

export default connect(mSTP, null)(OddsPercentageDoughnut);