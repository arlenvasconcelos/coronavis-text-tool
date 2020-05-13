import React from 'react';

import {Container} from '@material-ui/core';
import Header from '../components/Tools/Header';
import NavSearch from '../components/Tools/NavSearch';

export default function Tools(props) { 
  return (
    <div>
      <Header/>
      <NavSearch/>
      <Container>
        {props.children}
      </Container>
      {/* <Footer/> */}
    </div>
  )
}