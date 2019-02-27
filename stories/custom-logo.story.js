import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navi } from '../src/Navi';
import '../src/navi-custom.scss';
import DemoContent from '../src/demo/content';
import CollapseDemo from '../src/demo/collapse';
import './custom-logo.scss';
import Navbar from '../src/demo/navbar';
import RSTLSS from '../src/demo/rstlss-logo.svg';

storiesOf('Custom Logo', module)
  .add('collapsed', () => (
    <div className="custom-logo">
      <Navi logo={RSTLSS} navbar={Navbar} collapseAt="1" collapsed={true} automate={false}>
        <DemoContent />
      </Navi>
    </div>
  ))
  .add('expanded', () => (
    <div className="custom-logo">
      <Navi logo={RSTLSS} navbar={Navbar} collapseAt="1" collapsed={false} automate={false}>
        <DemoContent />
      </Navi>
    </div>
  ))
  .add('autotoggle', () => (
    <div className="custom-logo">
      <Navi logo={RSTLSS} navbar={Navbar} collapseAt="1" collapsed={false} automate={true}>
        <DemoContent />
      </Navi>
    </div>
  ));
