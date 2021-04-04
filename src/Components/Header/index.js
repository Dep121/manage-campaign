import React from 'react';
import logo from '../../assets/logo.png';
import { useTranslate } from '../../Containers/hooks';
import s from './index.module.scss';

function Header() {
  const { changeLanguage, lang } = useTranslate();

  const changeLang = ({target: {value}}) => {
    changeLanguage(value);
  }
  return(
    <div className={s.header}>
      <img src={logo} />
      <select value={lang} onChange={changeLang}>
        <option value={'english'}>English</option>
        <option value={'hindi'}>हिन्दी</option>
      </select>
    </div>
  )
}

export default Header;
