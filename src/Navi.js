import React, { Component } from 'react';
import { interval } from 'rxjs';
import * as Rx from 'rx-dom';
import { Logo } from './Logo';
import './Navi.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
    const { fixed = true, collapsed = false } = props;
    this.state = {
      fixed,
      collapsed,
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

  render() {
    const { collapsed, fixed, scrolling } = this.state;
    const { logo, children, navbar } = this.props;

    return (
      <div id="navi-root" className={`navi navi-${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="navi-nav">{navbar({ fixed, collapsed })}</div>
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
          <div className="navi-scrolldown">
            <div className="navi-scrolldown-text">Scroll</div>
            <div className="navi-scrolldown-arrow">
              <FontAwesomeIcon icon={faChevronDown} size="3x" />
            </div>
          </div>
          <div className="navi-hero-overlay" />
          <div className="navi-hero-background" />
        </div>

        <div id="navi-content" className={`${collapsed ? 'collapsed' : ''}`}>
          {children}
        </div>
      </div>
    );
  }
}

export default Navi;
