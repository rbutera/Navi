import React from 'react';
import { storiesOf } from '@storybook/react';

import { Navi } from '../src/Navi';

storiesOf('Navi', module)
  .add('collapsed', () => <Navi collapsed>Content</Navi>)
  .add('expanded', () => <Navi collapsed={false}>Content</Navi>);
