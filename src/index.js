import React from 'react';
import { Navi } from './Navi';
import { render } from 'react-dom';
import * as Rx from 'rx-dom';

function main() {
  const root = document.getElementById('root');
  render(<Navi />, root);
}

Rx.DOM.ready().subscribe(main);

console.log('Navi loaded');
module.hot.accept();
