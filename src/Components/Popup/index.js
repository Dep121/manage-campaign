import React from 'react';
import s from './index.module.scss';

function Popup({ imgSrc, name, region }) {
  return (
    <div className={s.popup}>
      <div className={s.upper}>
        <img src={imgSrc}></img>
        <div className={s.sideInfo}>
          <div>{name}</div>
          <div>{region}</div>
        </div>
      </div>
      <div className={s.headerText}>Pricing</div>
      <div className={s.rows}>
        <div className={s.row}>
          <span>1 Week - 1 Month</span>
          <span>$ 100.00</span>
        </div>
        <div className={s.row}>
          <span>6 Months</span>
          <span>$ 500.00</span>
        </div>
        <div className={s.row}>
          <span>1 Year</span>
          <span>$ 900.00</span>
        </div>
      </div>
    </div>
  )
}

export default Popup;
