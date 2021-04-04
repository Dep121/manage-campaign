import React, { useState } from 'react';
import s from './index.module.scss';
import { MONTH } from '../../constants';
import { isSelectedDate } from '../../utility';
import { useTranslate } from '../../Containers/hooks';

function Calendar({ defaultYear, defaultMonth, defaultDate, dateClick }) {

  const { t } = useTranslate();

  const [month, setMonth] = useState(defaultMonth);
  const [year, setYear] = useState(defaultYear);

  // month in JS are 0..11, not 1..12
  let d = new Date(year, month);
  let mainDate = new Date(defaultYear, defaultMonth, defaultDate);
  let p = <p> {d.toLocaleString('default', { month: 'long' })}</p>;
  let week = [];
  let weeks = [];
  // before month dates
  const getDateElement = (date, faded) => {
    const isActive = isSelectedDate(mainDate, date);
    return <td onClick={() => dateClick(date, isActive)} className={`${faded ? s.faded : ''} ${isActive === 0 ? s.active : ''}`} >{date.getDate()}</td>
  }

  // before month dates
  for (let i = 0; i < d.getDay(); i++) {
    week.push(getDateElement(new Date(year, month, i - d.getDay() + 1), true));
  }

  // current month dates
  while (d.getMonth() == month) {
    week.push(getDateElement(new Date(d)));

    if (d.getDay() == 6) {
      weeks.push(week);
      week = [];
    }

    d.setDate(d.getDate() + 1);
  }

  // after month dates
  if (d.getDay() != 0) {
    for (let i = d.getDay(); i < 7; i++) {
      week.push(getDateElement(new Date(d), true));
      d.setDate(d.getDate() + 1);
    }
  }

  weeks.push(week);
  week = [];

  const yearChange = ({ target: { value } }) => {
    setYear(value);
  }

  const monthChange = ({ target: { value } }) => {
    setMonth(value);
  }

  return (
    <div className={s.calendar}>
      <div className={s.yearMonth}>
        <label htmlFor={"Year"}>
          <span>{t('Year')}:</span>
          <select value={year} onChange={yearChange}>
            {
              [1, 2, 3, 4, 5, 6, 7].map(ele => {
                return (
                  <option key={2017 + ele} value={2017 + ele}>{2017 + ele}</option>
                );
              })
            }
          </select>
        </label>
        <label htmlFor={"Month"}>
          <span>{t('Month')}:</span>
          <select value={month} onChange={monthChange}>
            {
              MONTH.map((ele, i) => {
                return (
                  <option key={ele} value={i}>{ele}</option>
                );
              })
            }
          </select>
        </label>
      </div>
      <table>
        <tbody>
          <tr>
            <th>SUN</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
            <th>SAT</th>
          </tr>
          {
            weeks.map((week, i) => <tr key={i}>{week.map(date => date)}</tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;
