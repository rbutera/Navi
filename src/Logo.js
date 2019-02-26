import React, { Component } from 'react';
import './Logo.scss';

export function Logo(props) {
  const { src, alt = 'Logo', onClick, collapsed, scrolling } = props;

  return (
    <div className={`navi-logo ${scrolling ? 'scrolling' : ''} ${collapsed ? 'collapsed' : ''}`}>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
}

export default Logo;
