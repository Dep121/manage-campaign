import React from 'react';
import { MONTH, _MS_PER_DAY } from '../../constants';
import { useTranslate } from '../../Containers/hooks';
import s from './index.module.scss';

function DateEle({ camp }) {

  const { t } = useTranslate();

  let today = new Date();
  const d = new Date(camp.createdOn);
  const dateString = `${MONTH[d.getMonth()]} ${d.getFullYear()}, ${d.getDate()}`;
  const diffDays = Math.floor((today - d) / _MS_PER_DAY);
  let diffDaysString = '';
  if (diffDays < 0) {
    diffDaysString = `${Math.abs(diffDays)} ${t('Days ahead')}`;
  } else if (diffDays === 0) {
    diffDaysString = ` ${t('Live Now')}`;
  } else {
    diffDaysString = `${diffDays} ${t('Days ago')}`;
  }

  return (
    <div className={s.dateEle}>
      <div className={s.content}>
        <div className={s.str}>{dateString}</div>
        <div className={s.diff}><span>{diffDays === 0 ? '🟢' : ''}</span>{diffDaysString}</div>
      </div>
    </div>
  )
}

export default DateEle;
