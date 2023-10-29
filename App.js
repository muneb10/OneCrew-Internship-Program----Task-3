import './App.css';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {


  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;