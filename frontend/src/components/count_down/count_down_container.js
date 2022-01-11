import { connect } from 'react-redux';
import CountDown from './count_down';




const mSTP = state => ({
    start: state.games.start_time,
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, null)(CountDown)