import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Store
import store from './store';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Routes from './routes';

import Footer from './components/home/Footer';
import Header from './components/home/Header';
import NavSearch from './components/home/NavSearch';


export default function App() {
  return (
    <Provider store={store}>
      <Header/>
      <NavSearch/>
      
      <Routes />
      
      <Footer/>
    </Provider>
  );
}