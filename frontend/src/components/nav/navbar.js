import React from 'react';
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import logo from '../../images/smallest-logo.JPG'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <nav className="nav-bar-container">
                <button className="profile-btn"><Link to={'/profile'}>Profile</Link></button>
                <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
            </nav>
        );
      } else {
        return (
            <nav className="nav-bar-container">
                <img className="logo" src={logo}></img>
                <Link className="signup-btn" to={'/signup'}>Sign Up</Link>
                <Link className="login-btn" to={'/login'}>Log In</Link>
            </nav>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;