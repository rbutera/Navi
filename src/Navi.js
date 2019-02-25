import React, { Component } from 'react';

export class Navi extends Component {
  constructor(props) {
    super(props);
    const { collapsed = false } = props;
    this.state = {
      collapsed
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
      <div id="navi" className={collapsed ? 'collapsed' : 'expanded'}>
        Navi
      </div>
    );
  }
}

export default Navi;
