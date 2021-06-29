import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { NotFound } from '../pages/NotFound';
import DashboardRouter from './DashboardRouter';


export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={ LoginScreen } />
          <Route exact path='/no-found' component={ NotFound } />
          <Route path='/' component={ DashboardRouter } />
          <Route exact path='*' component={ NotFound } />
        </Switch>
      </div>
    </Router>
  )
}
