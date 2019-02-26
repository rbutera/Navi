import React, { Component } from 'react';
import { Navi } from '../Navi';
import DemoContent from './content';

import { interval } from 'rxjs';

class CollapseDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  expand = () => {
    this.setState({ collapsed: false });
  };

  collapse = () => {
    this.setState({ collapsed: true });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div id="navi-collapse-demo">
        <Navi collapsed={collapsed}>
          {collapsed ? 'collapsed' : 'expanded'}
          <DemoContent />
        </Navi>
      </div>
    );
  }
}

export default CollapseDemo;
