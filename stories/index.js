import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navi } from '../src/Navi';
import DemoContent from '../src/demo/content';

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
  ));
