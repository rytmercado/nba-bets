import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container'
import { Link } from 'react-router-dom'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login-error-messages" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sigup-page">
        <NavbarContainer />
        <div className="signup-form-container">
          <form className="form-container-signup" onSubmit={this.handleSubmit}>
            <div className="form-container-signup-2">
                <h1 className="signup-header">Sign Up</h1>
                <div>Email</div>
                <input type="text"
                className="signup-form-fields"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              <br/>
                <div>Username</div>
                <input type="text"
                  className="signup-form-fields"
                  value={this.state.handle}
                  onChange={this.update('handle')}
                />
              <br/>
                <div>Password</div>
                <input type="password"
                  className="signup-form-fields"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              <br/>
              <div>Confirm Password</div>
                <input type="password"
                  className="signup-form-fields"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                />
              <br/>
              {this.renderErrors()}
              <input className="submit-btn" type="submit" value="Sign Up" />
              <div className="signup-container-message">
                <div className="signup-message">Already have an account?</div>
                <Link className="signup-page-login-btn" to={'/login'}>Log In</Link>
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

export default withRouter(SignupForm);