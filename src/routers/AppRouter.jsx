import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { NotFound } from '../pages/NotFound';

export default function AppRouter() {

  const { state: user } = useContext( AuthContext );
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>

          <PublicRoute
            exact
            path='/login'
            component={ LoginScreen }
            isAuthenticate={ user.logged }
          />
          <PrivateRoute
            path='/'
            component={ DashboardRouter }
            isAuthenticate={ user.logged }
          />
          <Route exact path='/no-found' component={ NotFound } />
          <Route exact path='*' component={ NotFound } />
        </Switch>
      </div>
    </Router>
  )
}
