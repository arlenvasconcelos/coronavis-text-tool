import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Dashboard from './views/Dashboard';

import { Provider } from 'react-redux';
import store from './store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard/>
      </div>
    </Provider>
  );
}

export default App;
