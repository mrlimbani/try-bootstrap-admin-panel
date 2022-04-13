import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Dashboard from './components/layout/Dashboard';

import ForgotPass from './components/auth/ForgotPass';

function appRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/forgotpass' component={ForgotPass}></Route>
        <Route exact path="/register" component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default appRoutes