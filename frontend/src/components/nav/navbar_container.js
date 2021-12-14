import { connect } from 'react-redux';
import { logout, login, fetchUser } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mDTP)(NavBar);