import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/tweets');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className="login-error-messages" key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-page">
        <NavbarContainer />
        <div className="form-container">
          <form className="form-container-login" onSubmit={this.handleSubmit}>
            <div className="form-container-login-2">
                <h1 className="login-header">Log In</h1>
                <div>Email</div>
                <input type="text"
                  className="login-form-fields"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              <br/>
                <div>Password</div>
                <input type="password"
                  className="login-form-fields"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              <br/>
              {this.renderErrors()}
              <input className="submit-btn" type="submit" value="Log In" />
              <div className="login-container-message">
                <div className="login-message">Don't have an account?</div>
                <Link className="login-page-signup-btn" to={'/signup'}>Signup</Link>
              </div>
              <div className="line"></div>
              <div className="warning-text">
                If you or someone you know has a gambling problem, 
                crisis counseling and referral services can be 
                accessed by calling 1-800-GAMBLER (1-800-426-2537).
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);