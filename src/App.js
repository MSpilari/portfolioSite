import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import NotAdmin from './pages/NotAdmin'
import NewProject from './pages/newProject'
import PrivateRoute from './routes/privateRoutes';

function App() {
  return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        
        <Route path='/login' exact component={LoginPage} />
        
        <Route path='/notAdmin' exact component={NotAdmin} />
        
        <PrivateRoute path='/newProject' component={NewProject} />
      </Switch>
  )
}

export default App;