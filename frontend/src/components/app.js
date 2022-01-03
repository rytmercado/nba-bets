import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

// components
import MainPageContainer from './main/main_page_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import SplashForm from './splash/splash_form';
import ProfileContainer from './profile/profile_container';
import ShowGameContainer from './games/show_game_container';

import './reset.css'
import './splash/splash.css'
import './nav/navbar.css'
import './session/login_form.css'
import './session/signup_form.css'
import '../components/games/game_index_item.css'
import './bet_modal/bet_modal.css'
import './games/game_index_item.css'
import './games/show_game.css'



const App = () => (
  <div>
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/game/show/:id" component={ShowGameContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/main" component={MainPageContainer} />
        
        <Route path="/" component={SplashForm} />
        
        
    </Switch>
  </div>
);

export default App;