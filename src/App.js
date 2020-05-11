import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//components
import Searched from './pages/Tools/Searched';
import Questions from './pages/Tools/Questions';
import Tools from './pages/Tools.js'
//Store
import store from './store';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



const ToolsRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Tools>
        <Component {...props} />
      </Tools>
    )}
  />
);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <ToolsRoute path="/tools/home" exact component={Searched} />
            <ToolsRoute path="/tools/questions/:id/answers" exact component={Questions} />
            <ToolsRoute path="/tools/questions/:id/answers?page=:page" exact component={Questions} />
            <Redirect from="*" to="/tools/home" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}