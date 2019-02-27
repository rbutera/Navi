import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navi } from '../src/Navi';
import '../src/navi-custom.scss';
import DemoContent from '../src/demo/content';
import CollapseDemo from '../src/demo/collapse';

import RSTLSS from '../src/demo/rstlss-logo.svg';

storiesOf('Navi', module)
  .add('collapsed', () => (
    <Navi collapseAt="1" collapsed>
      <DemoContent />
    </Navi>
  ))
  .add('expanded', () => (
    <Navi collapseAt="1" collapsed={false}>
      <DemoContent />
    </Navi>
  ))
  .add('autotoggle', () => (
    <Navi collapseAt="1" collapsed={false} automate={true}>
      <DemoContent />
    </Navi>
  ));

require('./custom-logo.story.js');
