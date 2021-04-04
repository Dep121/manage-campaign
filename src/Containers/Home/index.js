import React, { useEffect, useRef, useState } from 'react';
import Table from '../../Components/Table';
import { MONTH, _MS_PER_DAY } from '../../constants';
import { isToday } from '../../utility';
import s from './index.module.scss';
import price from '../../assets/price.png';
import pubG from '../../assets/Bitmap.png'
import Overlay from '../../Components/Overlay';
import Popup from '../../Components/Popup';
import ActionEle from '../../Components/ActionEle';
import DateEle from '../../Components/DateEle';
import CampaignEle from '../../Components/CampaignEle';

function HomeC() {
  const [tabs, setTabs] = useState([false, false, true]);
  const [liveTabData, setLiveTabData] = useState([]);
  const [pastTabData, setPastTabData] = useState([]);
  const [futureTabData, setFutureTabData] = useState([]);
  const [toggleOverlay, setOverlay] = useState(false);
  const [overlayData, setOverlayData] = useState({});

  const getData = async () => {
    const { data } = await (await fetch('https://apimocha.com/manage-campaign/campaign-data')).json();
    let campaignData = [[], [], []];
    data.forEach(camp => {
      let bool = isToday(camp.createdOn);
      if (bool === 0) {
        // live
        campaignData[1].push(camp);
      } else if (bool === 1) {
        // future
        campaignData[0].push(camp);
      } else {
        // past
        campaignData[2].push(camp);
      }
    })

    setPastTabData(campaignData[2]);
    setLiveTabData(campaignData[1]);
    setFutureTabData(campaignData[0]);
  }

  useEffect(() => {
    getData();
  }, [])

  const tabClick = (index) => {
    setTabs(tabs.map((_, i) => index === i));
  }

  const dateChange = (date, isChanged, camp) => {
    let newDate = new Date(date);
    const selectedTab = tabs.findIndex((bool => bool));

    // for past tab
    if(selectedTab === 2 && isChanged === 1) {
      const day = isToday(date);
      if(day === -1) return;
      if(day === 0){
        // past to live
        setLiveTabData([...liveTabData, {...camp, createdOn: newDate.getTime()}]);
      }
      if(day === 1) {
        // past to future
        setFutureTabData([...futureTabData, {...camp, createdOn: newDate.getTime()}]);
      }
      // remove from past
      setPastTabData(pastTabData.filter(ele => ele.createdOn !== camp.createdOn));
    }

    // for Upcoming tab
    if(selectedTab === 0 && isChanged === -1) {
      const day = isToday(date);
      if(day === 1) return;
      if(day === 0) {
        // future to live
        setLiveTabData([...liveTabData, {...camp, createdOn: newDate.getTime()}]);
      }
      if(day === -1) {
        // future to past
        setPastTabData([...pastTabData, {...camp, createdOn: newDate.getTime()}]);
      }
      // remove from future
      setFutureTabData(futureTabData.filter(ele => ele.createdOn !== camp.createdOn));
    }

    // for Live tab
    if(selectedTab === 1) {
      if(isChanged === 0)  return;
      if(isChanged === 1) {
        // live to future
        setFutureTabData([...futureTabData, {...camp, createdOn: newDate.getTime()}]);
      }
      if(isChanged === -1) {
        // live to past
        setPastTabData([...pastTabData, {...camp, createdOn: newDate.getTime()}]);
      }
      // remove from live
      setLiveTabData(liveTabData.filter(ele => ele.createdOn !== camp.createdOn));
    }
  }

  const makeElement = (camp) => {
    return [1, 2, 3, 4].map(col => {
      if (col === 1) {
        return <DateEle camp={camp} />;
      } else if (col === 2) {
      return <CampaignEle camp={camp} />;
      } else if (col === 3) {
        return (
          <div onClick={() => {
            setOverlayData(<Popup imgSrc={pubG} name={camp.name} region={camp.region} />);
            setOverlay(!toggleOverlay);
          }} className={s.view}>
            <img src={price}></img>
            <span>View Pricing</span>
          </div>
        )
      } else {
        return <ActionEle camp={camp} dateChange={dateChange} setOverlay={setOverlay} setOverlayData={setOverlayData} />;
      }
    });
  }

  const currentTableData = () => {
    let selectedTab = tabs.findIndex((bool => bool));
    if (selectedTab === 0) {
      return futureTabData.map(camp => {
        return makeElement(camp);
      })
    } else if (selectedTab === 1) {
      return liveTabData.map(camp => {
        return makeElement(camp);
      })
    } else {
      return pastTabData.map(camp => {
        return makeElement(camp);
      })
    }
  }

  return (
    <div className={s.content}>
      <div className={s.headerText}>Manage Campaigns</div>
      <div className={s.tabs}>
        <span onClick={() => tabClick(0)} className={`${tabs[0] ? s.active : ''}`}>Upcoming Campaigns</span>
        <span onClick={() => tabClick(1)} className={`${tabs[1] ? s.active : ''}`}>Live Campaigns</span>
        <span onClick={() => tabClick(2)} className={`${tabs[2] ? s.active : ''}`}>Past Campaigns</span>
      </div>

      {/* <Table columns={["DATE", "CAMPAIGN", "VIEW", "ACTIONS"]} rows={[["deepak", "kumar", "pandey", "hello"], ["pandey", "deepak", "kumar", "hello"], ]}/> */}
      <Table id={tabs.findIndex((bool => bool))} columns={["DATE", "CAMPAIGN", "VIEW", "ACTIONS"]} rows={currentTableData()} />

      {
        toggleOverlay &&
        <Overlay showCloseBtn onClose={() => setOverlay(!toggleOverlay)}>
          {overlayData}
        </Overlay>
      }
    </div>
  )
}

export default HomeC;