import React, { Component } from 'react'
import { Route,  Redirect, Switch } from 'react-router-dom'

import Menu from './common/Menu'
import { Login, Home, Register, ForgetPwd, Site, Review, KnowBase, User } from './components'
import Clock from './common/Clock'

import './static/css/App.css'
 
export default class App extends Component {
  render() {
    return (
      <div>
        <Route component={Clock} path="/" />
        <Route component={Menu} />
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Home} path="/home" />
          <Route component={Register} path="/register" />
          <Route component={ForgetPwd} path="/forgetPwd" />
          <Route component={Site} path="/site" />
          <Route component={Review} path="/review" />
          <Route component={KnowBase} path="/note" />
          <Route component={User} path="/personal" />
          <Route component={User} path="/updatePwd" />
          <Route component={User} path="/setEncryptedQuestion" />
          <Redirect to="/home" from ="" />
        </Switch>
      </div>
    )
  }
}



