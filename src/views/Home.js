import React, { useState } from 'react';
import Header from '../Components/Header';
import s from './home.module.scss';

function Home() {

  const [tabs, setTabs] = useState([true, false, false]);

  const tabClick = (index) => {
    setTabs(tabs.map((_, i) => index === i));
  }

  return (<div className={s.home}>
    <Header />
    <div className={s.content}>
      <div className={s.headerText}>Manage Campaigns</div>
      <div className={s.tabs}>
        <span onClick={() => tabClick(0)} className={`${tabs[0] ? s.active : ''}`}>Upcoming Campaigns</span>
        <span onClick={() => tabClick(1)} className={`${tabs[1] ? s.active : ''}`}>Live Campaigns</span>
        <span onClick={() => tabClick(2)} className={`${tabs[2] ? s.active : ''}`}>Past Campaigns</span>
      </div>
    </div>
  </div>);
}

export default Home;
