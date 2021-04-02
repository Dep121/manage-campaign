import React from 'react';
import logo from '../../assets/logo.png';
import s from './index.module.scss';

function Header() {
  return(
    <div className={s.header}>
      <img src={logo} />
    </div>
  )
}

export default Header;
