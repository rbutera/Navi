import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navi } from '../src/Navi';
import '../src/navi-custom.scss';
import DemoContent from '../src/demo/content';
import CollapseDemo from '../src/demo/collapse';

storiesOf('Navi', module)
  .add('collapsed', () => (
    <Navi collapsed>
      <DemoContent />
    </Navi>
  ))
  .add('expanded', () => (
    <Navi collapsed={false}>
      <DemoContent />
    </Navi>
  ))
  .add('automated', () => (
    <Navi collapsed={false} automate={true}>
      <DemoContent />
    </Navi>
  ));
