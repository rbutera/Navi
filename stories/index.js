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

storiesOf('Custom Logo', module)
  .add('collapsed', () => (
    <Navi logo={RSTLSS} collapseAt="1" collapsed={true} automate={false}>
      <DemoContent />
    </Navi>
  ))
  .add('expanded', () => (
    <Navi logo={RSTLSS} collapseAt="1" collapsed={false} automate={false}>
      <DemoContent />
    </Navi>
  ))
  .add('autotoggle', () => (
    <Navi logo={RSTLSS} collapseAt="1" collapsed={false} automate={true}>
      <DemoContent />
    </Navi>
  ));
