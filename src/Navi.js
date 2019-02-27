import React, { Component } from 'react';
import { interval } from 'rxjs';
import * as Rx from 'rx-dom';
import fairy from '../logo/v2/fairy-logo.svg';
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
      logo = fairy,
      automate = false,
      fixed = true,
      collapsed = false,
      collapseAt = '52px',
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

  componentDidMount = () => {
    const { automate } = this.props;

    this.scrollSub = Rx.DOM.scroll(document).subscribe(event => {
      this.getScrollPosition();
    });

    if (automate) {
      this.intervalSub = interval(3000).subscribe(() => {
        this.setState({ collapsed: !this.state.collapsed });
      });
    }
  };

  componentWillUnmount = () => {
    const { automate } = this.props;

    if (automate) {
      this.intervalSub.unsubscribe();
    }

    if (this.scrollSub && this.scrollSub.unsubscribe) {
      this.scrollSub.unsubscribe();
    }
  };

  getScrollPosition = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const { collapseAt } = this.props;
    // console.debug(`getScrollPosition:\tdistanceY = ${distanceY}, collapseAt = ${collapseAt}`);
    // console.debug(`document.documentElement.scrollTop = ${document.documentElement.scrollTop}`);
    console.debug('props', this.props);

    if (distanceY > collapseAt) {
      if (!this.props.collapsed && !this.state.collapsed) {
        this.collapse();
      }
    } else if (distanceY <= collapseAt) {
      if (!this.props.collapsed && this.state.collapsed) {
        this.expand();
      }
    }
  };

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
    const { logo, children } = this.props;

    return (
      <div id="navi-root" className={`navi navi-${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="navi-nav">
          <nav
            className={`navbar is-black is-transparent ${fixed && collapsed ? 'is-fixed-top' : ''}`}
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
            src={logo}
            collapsed={collapsed}
            scrolling={scrolling}
            alt="Navi"
            onClick={() => {
              alert('clicked Navi');
            }}
          />
          <div className="navi-hero-overlay" />
        </div>

        <div id="navi-content" className={`${collapsed ? 'collapsed' : ''}`}>
          {children}
        </div>
      </div>
    );
  }
}

export default Navi;
