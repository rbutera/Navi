import React, { Component } from 'react';
import './Logo.scss';

export function Logo(props) {
  const { src, width, height, alt = 'Logo', onClick } = props;
  return (
    <div className="container navi-logo">
      <img src={src} alt={alt} style={{ width, height }} onClick={onClick} />
    </div>
  );
}

export default Logo;
