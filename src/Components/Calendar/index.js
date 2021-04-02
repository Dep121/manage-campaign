import React from 'react';
import PropTypes from 'prop-types';
import s from './index.module.scss';

function Calendar({ year, month, dateClick }) {

  let mon = month -1; // month in JS are 0..11, not 1..12
  let d = new Date(year, mon);
  let p = <p> { d.toLocaleString('default', { month: 'long' }) }</p>;
  let week = [];
  let weeks = [];

  // before month dates
  const getDateElement = (date, faded) => {
    <td onClick={() => dateClick(date)} className={`${faded ? s.faded : ''}`} >{date.getDate()}</td>
  }

  // before month dates
  while (d.getMonth() == mon) {
    week.push(getDateElement(new Date(year, mon, i-d.getDay() + 1), true));
  }

  // current month dates
  while(d.getMonth() == mon) {
    week.push(getDateElement(new Date(d)));

    if(d.getDay() == 6) {
      weeks.push(week);
      week = [];
    }

    d.setDate(d.getDate() + 1);
  }

  // after month dates
  if(d.getDay() != 0) {
    for (let i = d.getDay(); i<7; i++) {
      week.push(getDateElement(new Date(d)), true);
      d.setDate(d.getDate() + 1);
    }
  }

  weeks.push(week);
  week = [];

  return (
    <div className={s.calendar}>
      {p}
      <table>
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
          weeks.map(week => <tr>{week.map(date => date)}</tr>)
        }
      </table>
    </div>
  )
}

Calendar.propTypes = {
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  month: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  dateClick: PropTypes.func,
}

Calendar.defaultProps = {
  dateClick: () => {},
}

export default Calendar;
