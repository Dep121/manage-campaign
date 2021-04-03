import React from 'react';
import s from './index.module.scss';
import { ReactComponent as Close } from '../../assets/close.svg';

function Overlay({ children, onClose, showHeader, showClose, showCloseBtn }) {
  return (<div className={s.overlayWrapper}>
    <div className={s.overlay}>
      {
        showHeader &&
        <div className={s.header}>
          <span>Overlay header</span>
          {
            showClose &&
            <div className={s.closeIcon}>
              <Close onClick={onClose} />
            </div>
          }
        </div>
      }
      <div className={s.content}>
        {children}
      </div>
      {
        showCloseBtn &&
        <button className={s.button} onClick={onClose}>Close</button>
      }
    </div>
  </div>)
}

export default Overlay;
