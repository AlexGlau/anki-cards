import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Start from './pages/Start';
import Test from './pages/Test';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <Test />
        </Route>
        <Route path="/" exact>
          <Start />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
