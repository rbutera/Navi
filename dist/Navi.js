(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('rxjs'), require('rx-dom'), require('@fortawesome/react-fontawesome'), require('@fortawesome/free-solid-svg-icons')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'rxjs', 'rx-dom', '@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'], factory) :
  (global = global || self, factory(global['@rstlss/navi'] = {}, global.React, global.rxjs, global.Rx, global.reactFontawesome, global.freeSolidSvgIcons));
}(this, function (exports, React, rxjs, Rx, reactFontawesome, freeSolidSvgIcons) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function Logo(props) {
    var src = props.src,
        _props$alt = props.alt,
        alt = _props$alt === void 0 ? 'Logo' : _props$alt,
        onClick = props.onClick,
        collapsed = props.collapsed,
        scrolling = props.scrolling;
    return React__default.createElement("div", {
      className: "navi-logo ".concat(scrolling ? 'scrolling' : '', " ").concat(collapsed ? 'collapsed' : '')
    }, React__default.createElement("img", {
      src: src,
      alt: alt,
      onClick: onClick
    }));
  }

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

  var Navi =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Navi, _Component);

    function Navi(props) {
      var _this;

      _classCallCheck(this, Navi);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Navi).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
        var automate = _this.props.automate;
        _this.scrollSub = Rx.DOM.scroll(document).subscribe(function (event) {
          _this.getScrollPosition();
        });

        if (automate) {
          _this.intervalSub = rxjs.interval(3000).subscribe(function () {
            _this.setState({
              collapsed: !_this.state.collapsed
            });
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
        var automate = _this.props.automate;

        if (automate) {
          _this.intervalSub.unsubscribe();
        }

        if (_this.scrollSub && _this.scrollSub.unsubscribe) {
          _this.scrollSub.unsubscribe();
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getScrollPosition", function () {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var collapseAt = _this.props.collapseAt; // console.debug(`getScrollPosition:\tdistanceY = ${distanceY}, collapseAt = ${collapseAt}`);
        // console.debug(`document.documentElement.scrollTop = ${document.documentElement.scrollTop}`);

        console.debug('props', _this.props);

        if (distanceY > collapseAt) {
          if (!_this.props.collapsed && !_this.state.collapsed) {
            _this.collapse();
          }
        } else if (distanceY <= collapseAt) {
          if (!_this.props.collapsed && _this.state.collapsed) {
            _this.expand();
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "expand", function () {
        _this.setState({
          collapsed: false
        });
      });

      _defineProperty(_assertThisInitialized(_this), "collapse", function () {
        _this.setState({
          collapsed: true
        });
      });

      var _props$fixed = props.fixed,
          fixed = _props$fixed === void 0 ? true : _props$fixed,
          _props$collapsed = props.collapsed,
          collapsed = _props$collapsed === void 0 ? false : _props$collapsed;
      _this.state = {
        fixed: fixed,
        collapsed: collapsed,
        scrolling: false
      };
      return _this;
    }

    _createClass(Navi, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            collapsed = _this$state.collapsed,
            fixed = _this$state.fixed,
            scrolling = _this$state.scrolling;
        var _this$props = this.props,
            logo = _this$props.logo,
            children = _this$props.children,
            navbar = _this$props.navbar;
        return React__default.createElement("div", {
          id: "navi-root",
          className: "navi navi-".concat(collapsed ? 'collapsed' : 'expanded')
        }, React__default.createElement("div", {
          className: "navi-nav"
        }, navbar({
          fixed: fixed,
          collapsed: collapsed
        })), React__default.createElement("div", {
          className: "navi-hero"
        }, React__default.createElement(Logo, {
          src: logo,
          collapsed: collapsed,
          scrolling: scrolling,
          alt: "Navi",
          onClick: function onClick() {
            alert('clicked Navi');
          }
        }), React__default.createElement("div", {
          className: "navi-scrolldown"
        }, React__default.createElement("div", {
          class: "navi-scrolldown-text"
        }, "Scroll"), React__default.createElement("div", {
          class: "navi-scrolldown-arrow"
        }, React__default.createElement(reactFontawesome.FontAwesomeIcon, {
          icon: freeSolidSvgIcons.faChevronDown,
          size: "3x"
        }))), React__default.createElement("div", {
          className: "navi-hero-overlay"
        }), React__default.createElement("div", {
          className: "navi-hero-background"
        })), React__default.createElement("div", {
          id: "navi-content",
          className: "".concat(collapsed ? 'collapsed' : '')
        }, children));
      }
    }]);

    return Navi;
  }(React.Component);

  exports.Navi = Navi;
  exports.default = Navi;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
