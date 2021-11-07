import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Start from './pages/Start';
import Test from './pages/Test';
import New from './pages/New';
import NavigationPanel from './navigationPanel/NavigationPanel';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/new" exact>
          <New />
        </Route>
        <Route path="/test" exact>
          <Test />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
      <NavigationPanel />
    </Router>
  );
};

export default App;
