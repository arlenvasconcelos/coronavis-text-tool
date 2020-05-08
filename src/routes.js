import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

//import pages
import Home from './pages/Home'
import Answers from './pages/Answers'






const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/answer/:id" component={Answers} />
        <Redirect from="*" to="/home" />
      </Switch>
    </Router>
  )
}

export default routes;
