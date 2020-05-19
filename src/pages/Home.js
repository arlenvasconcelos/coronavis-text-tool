import React from 'react';
import {useSelector} from 'react-redux';

import Searched from '../components/Home/Searched';
import Topics from '../components/Home/Topics';

export default function Home(){

  const dataSearched = useSelector(state => state.dataSearched.data, []);

  return (
    <>
      {dataSearched.papers 
        ? <Searched dataSearched={dataSearched}/> 
        : <>
            <Topics />
          </>
      }
      
  </>
  )
}