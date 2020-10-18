import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// eslint-disable-next-line import/no-named-as-default
import App from './pages/App'
import Details from './pages/Details'
import Notfound from './pages/NotFound'
import './index.scss'

const routing = (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/city/:id" component={Details} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  </div>
)

render(routing, document.getElementById('root'))
