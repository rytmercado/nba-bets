import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mDTP)(NavBar);