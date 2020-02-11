import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import { Home } from 'pages/Home'
import { Rank } from 'pages/Rank'

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/rank" component={Rank} />
    </Switch>
  </Router>
)

export default App
