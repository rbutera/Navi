import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navi } from '../src/Navi';
import '../src/navi-custom.scss';
import DemoContent from '../src/demo/content';
import CollapseDemo from '../src/demo/collapse';
import fairy from '../logo/v2/fairy-logo.svg';
import RSTLSS from '../src/demo/rstlss-logo.svg';

storiesOf('Navi', module)
  .add('collapsed', () => (
    <Navi logo={fairy} collapsed>
      <DemoContent />
    </Navi>
  ))
  .add('expanded', () => (
    <Navi logo={fairy} collapsed={false}>
      <DemoContent />
    </Navi>
  ))
  .add('autotoggle', () => (
    <Navi logo={fairy} collapsed={false} automate={true}>
      <DemoContent />
    </Navi>
  ));

storiesOf('Custom Logo', module)
  .add('collapsed', () => (
    <Navi logo={RSTLSS} collapsed={true} automate={false}>
      <DemoContent />
    </Navi>
  ))
  .add('expanded', () => (
    <Navi logo={RSTLSS} collapsed={false} automate={false}>
      <DemoContent />
    </Navi>
  ))
  .add('autotoggle', () => (
    <Navi logo={RSTLSS} collapsed={false} automate={true}>
      <DemoContent />
    </Navi>
  ));
