import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Home from './views/Home';

import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
