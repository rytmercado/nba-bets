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
    this.updateCurrency = this.updateCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    //if this.rpops.loggedin > fetchCurrentUser
    if(this.props.user){
      if (this.props.user.id){
        // console.log(this.props.user.id, "frontend")
        this.props.fetchUser(this.props.user.id)
      }
    }
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
  
  handleClick() {
    const demoUser = {handle: "Demo User", email: "demo@gmail.com", password: "password"}
    this.props.login(demoUser)
  }

  updateCurrency() {

  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      // console.log(this.props.user)
      if (this.props.loggedIn) {
        return (
          <div>
            <nav className="nav-bar-container">
                <Link className="logo" to={'/main'}><img src={logo}></img></Link>
                <div className="currency-header" onClick={this.updateCurrency}>Your Balance: </div>
                <div className="currency-amt">{this.props.user.currency}</div>
                {/* <button className="currency-deposit">Deposit</button> */}
                <button className="profile-btn"><Link to={'/profile'}>{this.props.user.handle}</Link></button>
                <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
            </nav>
            {/* <div className="currency-container">
              <div className="currency-header">Balance: </div>
              <div className="currency-amt">{this.props.user.currency}</div>
            </div> */}

          </div>
        );
      } else {
        return (
            <nav className="nav-bar-container">
                <Link className="logo" to={'/main'}><img src={logo}></img></Link>
                <Link className="signup-btn" to={'/signup'}>Sign Up</Link>
                <Link className="login-btn" to={'/login'}>Log In</Link>
                <button className="demo-btn" onClick={this.handleClick}>Demo Login</button>
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