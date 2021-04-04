import React from 'react';
import Header from '../Components/Header';
import HomeC from '../Containers/Home';
import s from './home.module.scss';

function Home() {

  return (<div className={s.homeView}>
    <Header />
    <HomeC />
  </div>);
}

export default Home;
