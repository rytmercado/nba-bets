import { connect } from 'react-redux';
import { getGames } from '../../actions/game_actions';
import MainPage from './main_page';


const mSTP = state => ({
  
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
  });

export default connect(null, mDTP)(MainPage);