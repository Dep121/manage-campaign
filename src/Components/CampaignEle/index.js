import React from 'react';
import s from './index.module.scss';

function CampaignEle ({camp}) {
  return (
    <div className={s.campEle}>
      <div className={s.campImg}>
        <img src={camp.image_url} />
      </div>
      <div className={s.content}>
        <div className={s.name}>{camp.name}</div>
        <div className={s.region}>{camp.region}</div>
      </div>
    </div>
  )
}

export default CampaignEle;
