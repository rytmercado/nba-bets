import { connect } from 'react-redux';
import CountDown from './count_down';




const mSTP = (state, ownProps) => ({
    start: state.games.start_time,
    game: ownProps.g,
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, mDTP)(CountDown)