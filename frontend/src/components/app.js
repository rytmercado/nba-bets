import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import SplashForm from './splash/splash_form'


import './reset.css'
import './splash/splash.css'
import './nav/navbar.css'
import './session/login_form.css'
import './session/signup_form.css'
import '../components/games/game_index_item.css'
import './bet_modal/bet_modal.css'



const App = () => (
  <div>
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
        <ProtectedRoute exact path="/main" component={MainPage} />
        
        
        <Route path="/" component={SplashForm} />
        
        {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
  </div>
);

export default App;