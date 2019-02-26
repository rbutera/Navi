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

  componentDidMount = () => {
    this.intervalSub = interval(5000).subscribe(() => {
      const { collapsed } = this.state;
      if (collapsed) {
        console.log('expanding dong');
      }
      if (!collapsed) {
        console.log('collapsing');
      }
      console.log(this);
      this.setState({ collapsed: !collapsed });
    });
  };

  componentWillUnmount = () => {
    this.intervalSub.unsubscribe();
  };

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
          <DemoContent />
        </Navi>
      </div>
    );
  }
}

export default CollapseDemo;
