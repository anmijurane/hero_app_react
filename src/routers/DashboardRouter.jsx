import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom';

import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import Navbar from '../components/ui/Navbar';
import Search from '../components/search/Search';
import { NotFound } from '../pages/NotFound';
import Home from '../pages/Home';

export default function DashboardRouter() {
  return (
    <div>
      <Navbar />
      <div className="section">
        <Switch>
          <Route exact path='/'              component={ Home } />
          <Route exact path='/home'          component={ Home } />
          <Route exact path='/hero/:heroeId' component={ HeroScreen } />
          <Route exact path='/marvel'        component={ MarvelScreen } />
          <Route exact path='/dc'            component={ DcScreen } />
          <Route exact path='/search'        component={ Search } />
          <Route exact path='/no-found'      component={ NotFound } />
        </Switch>
      </div>
    </div>
  )
}
