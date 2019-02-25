import React, { Component } from 'react';
import fairy from '../logo/v2/fairy.svg';
import './Navi.scss';

/**
 * logoOptions:
 * {
 *  height: {
 *    collapsed,
 *    expanded
 *  }
 *  width: {
 *    collapsed,
 *    expanded
 *  }
 * }
 */

export class Navi extends Component {
  constructor(props) {
    super(props);
    const {
      collapsed = false,
      logoOptions = {
        height: {
          expanded: 'auto',
          collapsed: '50px'
        },
        width: {
          expanded: '50vw',
          collapsed: '85px'
        }
      }
    } = props;
    this.state = {
      collapsed,
      logoOptions
    };
  }

  expand = () => {
    this.setState({ collapsed: false });
  };

  collapse = () => {
    this.setState({ collapsed: true });
  };

  render() {
    const { collapsed, logoOptions } = this.state;
    const { children } = this.props;

    const logoWidth = collapsed ? logoOptions.width.collapsed : logoOptions.width.expanded;
    const logoHeight = collapsed ? logoOptions.height.collapsed : logoOptions.height.expanded;
    return (
      <div id="navi-root" className={`navi navi-${collapsed ? 'collapsed' : 'expanded'}`}>
        <nav
          className="navbar is-info is-fixed-top"
          role="navigation"
          style={{
            height: collapsed ? '52px' : '100vh'
          }}
        >
          <div className="navbar-menu">
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

            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src={fairy} style={{ width: logoWidth, height: logoHeight }} />
              </a>

              <a role="button" className="navbar-burger burger">
                <span />
                <span />
                <span />
              </a>
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
        <div
          id="navi-content"
          style={{
            paddingTop: collapsed ? '52px' : '100vh'
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Navi;
