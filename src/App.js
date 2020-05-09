import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//Store
import store from './store';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Tools from './layout/Tools';


export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/tools" component={Tools} />
            <Redirect from="*" to="/tools/home" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}