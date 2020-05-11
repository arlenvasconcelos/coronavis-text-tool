import React from 'react';
import {useSelector} from 'react-redux';

import Searched from '../components/Home/Searched';
import MainTopic from '../components/Home/MainTopic';
import Questions from '../components/Home/Questions';

export default function Home(){

  const dataSearched = useSelector(state => state.dataSearched.data, []);

  return (
    <>
      {dataSearched.papers 
        ? <Searched dataSearched={dataSearched}/> 
        : <></>
      }
      <MainTopic />
      <Questions />
  </>
  )
}