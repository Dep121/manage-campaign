import React from 'react';
import s from './index.module.scss';
import file from '../../assets/file.png';
import stats from '../../assets/stats.png';
import calendar from '../../assets/calendar.png';
import Calendar from '../Calendar';

function ActionEle({ camp, dateChange, setOverlay, setOverlayData }) {

  const dChange = (date, isChanged) => {
    setOverlay(false);
    dateChange(date, isChanged, camp);
  }

  const campDate = new Date(camp.createdOn);

  return (
    <div className={s.action}>
      <div className={s.content}>
        <div className={s.pair}>
          <img src={file}></img>
          <span>CSV</span>
        </div>
        <div className={s.pair}>
          <img src={stats}></img>
          <span>Report</span>
        </div>
        <div onClick={() => {
          setOverlayData(
            <Calendar
              defaultYear={campDate.getFullYear()}
              defaultMonth={campDate.getMonth()}
              defaultDate={campDate.getDate()}
              dateClick={dChange}
            />);
          setOverlay(true);
        }} className={s.pair}>
          <img src={calendar}></img>
          <span>Schedule Again</span>
        </div>
      </div>
    </div>
  )
}

export default ActionEle;
