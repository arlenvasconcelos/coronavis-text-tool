import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';



//components
import Home from './pages/Home';
import Answers from './pages/Answers';
import Tools from './template/Tools.js' 
//Store
import store from './store';

const history = createBrowserHistory();

const trackingId = "UA-167291036-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


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
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <ToolsRoute path="/tools/home" exact component={Home} />
            <ToolsRoute path="/tools/questions/:id/answers" exact component={Answers} />
            <ToolsRoute path="/tools/questions/:id/answers?page=:page" exact component={Answers} />
            <Redirect from="*" to="/tools/home" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}