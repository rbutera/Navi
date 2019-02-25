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
    const { children } = this.props;
    return (
      <div id="navi" className={collapsed ? 'collapsed' : 'expanded'}>
        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger burger">
              <span />
              <span />
              <span />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="navi-content">{children}</div>
      </div>
    );
  }
}

export default Navi;
