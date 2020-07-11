import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './pages/index'
import Create from './pages/create'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
