import { connect } from 'react-redux';
import CountDown from './count_down';




const mSTP = state => ({
    game: state.game,
});

const mDTP = dispatch => ({
    
});

export default connect(mSTP, null)(CountDown)