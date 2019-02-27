import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navi } from '../src/Navi';
import '../src/navi-custom.scss';
import DemoContent from '../src/demo/content';
import CollapseDemo from '../src/demo/collapse';

import RSTLSS from '../src/demo/rstlss-logo.svg';
import Navbar from '../src/demo/navbar';

storiesOf('Navi', module)
  .add('collapsed', () => (
    <Navi navbar={Navbar} collapseAt="1" collapsed>
      <DemoContent />
    </Navi>
  ))
  .add('expanded', () => (
    <Navi navbar={Navbar} collapseAt="1" collapsed={false}>
      <DemoContent />
    </Navi>
  ))
  .add('autotoggle', () => (
    <Navi navbar={Navbar} collapseAt="1" collapsed={false} automate={true}>
      <DemoContent />
    </Navi>
  ));

require('./custom-logo.story.js');
