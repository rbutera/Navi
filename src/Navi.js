import React, { Component } from 'react';
import fairy from '../logo/v2/fairy.svg';
import { Logo } from './Logo';
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
      fixed = true,
      collapsed = false,
      logoOptions = {
        classes: {
          expanded: ['expanded'],
          collapsed: ['collapsed'],
          final: ['final']
        }
      }
    } = props;
    this.state = {
      fixed,
      collapsed,
      logoOptions,
      scrolling: false
    };
  }

  expand = () => {
    this.setState({ collapsed: false });
  };

  collapse = () => {
    this.setState({ collapsed: true });
  };

  scrolling = () => {
    this.setState({ collapsed: true, scrolling: true });
  };

  atTop = () => {
    this.setState({ collapsed: false, scrolling: false });
  };

  render() {
    const { collapsed, fixed, scrolling } = this.state;
    const { children } = this.props;

    return (
      <div id="navi-root" className={`navi navi-${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="navi-nav">
          <nav
            className={`navbar ${fixed && collapsed ? 'is-fixed-top' : 'is-dark is-transparent'}`}
            role="navigation"
          >
            <div className="navbar-menu">
              <div className="navbar-brand">
                <a role="button" className="navbar-burger burger">
                  <span />
                  <span />
                  <span />
                </a>
              </div>
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
        </div>
        <div className="navi-hero">
          <Logo
            src={fairy}
            collapsed={collapsed}
            scrolling={scrolling}
            alt="Navi"
            onClick={() => {
              alert('clicked Navi');
            }}
          />
        </div>

        <div id="navi-content" className={`${collapsed ? 'collapsed' : ''}`}>
          {children}
        </div>
      </div>
    );
  }
}

export default Navi;
