import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import ListOfTrainings from './features/words/ListOfTrainings';
import Training from './features/words/Training';
import NewWord from './features/words/NewWord';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-word" exact>
          <NewWord />
        </Route>
        <Route path="/training" exact>
          <Training />
        </Route>
        <Route path="/">
          <ListOfTrainings />
        </Route>
      </Switch>
      <div className="nav-panel">
        <NavLink to="/" className="nav-tab" exact>Home</NavLink>
        <NavLink to="/new-word" className="nav-tab">New words</NavLink>
        <NavLink to="/training" className="nav-tab">Test</NavLink>
      </div>
    </BrowserRouter>
  );
}

export default App;
