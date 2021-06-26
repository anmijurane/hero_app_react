import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom';

import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import Navbar from '../components/ui/Navbar';

export default function DashboardRouter() {
  return (
    <div>
      <Navbar />
      <div className="section">
        <Switch>
          <Route exact path='/heroes' component={ HeroesScreen } />
          <Route exact path='/marvel' component={ MarvelScreen } />
          <Route exact path='/dc'     component={ DcScreen     } />
        </Switch>
      </div>
    </div>
  )
}
