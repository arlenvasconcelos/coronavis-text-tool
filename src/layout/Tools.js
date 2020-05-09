import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {BronserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import {Container, Row, Col} from 'react-bootstrap';
import ColumnChart from '../components/home/ColumnChart';
import TableCard from '../components/home/TableCard';
import Papers from '../components/home/Papers';
import Scatterplot from '../components/home/Scatterplot';
import Header from '../components/home/Header';
import NavSearch from '../components/home/NavSearch';
import SuggestedTopics from '../pages/SuggestedTopics';
import routes from '../routes'

const switchRoutes = (
  <Switch>
    {
      routes.map((prop, key) => {
        return (
          <Route
            path={"/tools" + prop.path}
            component={prop.component}
            key={key}
          />
        );
      })
    }
    <Redirect from="/tools" to="/tools/searched" />
  </Switch>
);

export default function Tools() { 

  return (
    <div className="home">
      <Header/>
      <NavSearch/>
      <Container fluid>
        <div>{switchRoutes}</div>
      </Container>
    </div>
  )
}