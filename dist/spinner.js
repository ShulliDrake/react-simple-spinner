(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSimpleSpinner"] = factory(require("react"));
	else
		root["ReactSimpleSpinner"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Spinner = __webpack_require__(1);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spinner2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  //default styles
	  spinner: {
	    animation: 'rotate 2s linear infinite',
	    background: 'transparent',
	    borderWidth: '5px',
	    borderStyle: 'solid',
	    borderColor: 'rgba(40, 210, 164, .8)',
	    borderLeftColor: 'rgba(40, 210, 164, .3)',
	    borderRadius: '100%',
	    margin: 'auto',
	    height: '35px',
	    width: '35px'
	  },
	  container: {
	    position: 'absolute',
	    top: '0px',
	    right: '0px',
	    bottom: '0px',
	    left: '0px',
	    background: 'rgba(230, 230, 230, .3)'
	  }
	};

	var Spinner = function (_React$Component) {
	  _inherits(Spinner, _React$Component);

	  function Spinner() {
	    _classCallCheck(this, Spinner);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
	  }

	  _createClass(Spinner, [{
	    key: 'addAnimationRules',
	    value: function addAnimationRules() {
	      var stylesheet = document.styleSheets[0];
	      var styleEl = void 0;
	      if (!stylesheet) {
	        styleEl = document.createElement('style');
	        document.head.appendChild(styleEl);
	        stylesheet = styleEl.sheet;
	      }

	      var animationName = 'rotate';
	      var fromRule = 'rotate(0deg)';
	      var toRule = 'rotate(360deg)';
	      var propName = 'transform';

	      if (CSSRule.WEBKIT_KEYFRAMES_RULE) {
	        stylesheet.insertRule('@-webkit-keyframes ' + animationName + ' {from{-webkit-' + propName + ': ' + fromRule + ';} to {-webkit-' + propName + ': ' + toRule + ';}}', 0);
	      } else if (CSSRule.MOZ_KEYFRAMES_RULE) {
	        stylesheet.insertRule('@-moz-keyframes ' + animationName + ' {from{-moz-' + propName + ': ' + fromRule + ';} to {-moz-' + propName + ': ' + toRule + ';}}', 0);
	      } else if (CSSRule.MS_KEYFRAMES_RULE) {
	        stylesheet.insertRule('@-ms-keyframes ' + animationName + ' {from{-ms-' + propName + ': ' + fromRule + ';} to {-ms-' + propName + ': ' + toRule + ';}}', 0);
	      } else {
	        stylesheet.insertRule('@keyframes ' + animationName + ' {from{' + propName + ': ' + fromRule + ';} to {' + propName + ': ' + toRule + ';}}', 0);
	      }
	    }

	    /*
	     * Convert hex color code to RGB
	     * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	     */

	  }, {
	    key: 'hexToRgb',
	    value: function hexToRgb(hex) {
	      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
	        return r + r + g + g + b + b;
	      });

	      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	      return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	      } : null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.addAnimationRules();

	      var spinnerStyle = Object.assign({}, styles.spinner);
	      var containerStyle = Object.assign({}, styles.container);

	      if (this.props.colorHex) {
	        var borderRGB = this.hexToRgb(this.props.colorHex);
	        if (borderRGB) {
	          spinnerStyle.borderColor = 'rgba(' + borderRGB.r + ', ' + borderRGB.g + ', ' + borderRGB.b + ', .7)';
	          spinnerStyle.borderLeftColor = 'rgba(' + borderRGB.r + ', ' + borderRGB.g + ', ' + borderRGB.b + ', .3)';
	        }
	      }

	      if (this.props.size) {
	        spinnerStyle.height = this.props.size;
	        spinnerStyle.width = this.props.size;
	      }

	      if (this.props.spinnerWidth) {
	        spinnerStyle.borderWidth = this.props.spinnerWidth;
	      }

	      if (this.props.style) {
	        spinnerStyle.borderStyle = this.props.style;
	      }

	      if (this.props.spinDuration) {
	        spinnerStyle.animationDuration = this.props.spinDuration + 's';
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: containerStyle },
	        _react2.default.createElement('div', { style: spinnerStyle })
	      );
	    }
	  }]);

	  return Spinner;
	}(_react2.default.Component);

	exports.default = Spinner;


	Spinner.propTypes = {
	  colorHex: _react2.default.PropTypes.string,
	  spinnerWidth: _react2.default.PropTypes.string,
	  spinDuration: _react2.default.PropTypes.number,
	  style: _react2.default.PropTypes.string,
	  size: _react2.default.PropTypes.string
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;