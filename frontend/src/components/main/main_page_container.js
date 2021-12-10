import { connect } from 'react-redux';
import { getGames } from '../../actions/game_actions';
import { logout } from '../../actions/session_actions';

import MainPage from './main_page';


const mSTP = state => ({
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    logout: () => dispatch(logout()),
    
  });

export default connect(mSTP, mDTP)(MainPage);