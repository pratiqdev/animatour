"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _animatour = _interopRequireDefault(require("../../animatour"));

var _shout = _interopRequireDefault(require("../../utils/shout"));

var _gsap = _interopRequireDefault(require("gsap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var B1 = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var S = props.S;
  var LOC = S.location;
  var ASD = S.activeStepData;
  var theme = {
    text: '#fff',
    background: '#000',
    primary: '#20c',
    secondary: '#aaa',
    tertiary: '',
    spacing: ['0', '.2em', '.4em', '.8em', '1.6em'],
    fontSize: ['.6em', '.8em', '1em', '1.2em', '1.4em'],
    maxWidth: '80vw',
    minWidth: '10rem',
    width: '20rem'
  };
  var border = {
    primary: {
      type: '',
      color: ''
    },
    secondary: {
      type: '1px solid',
      color: theme.secondary
    }
  };
  var s = {
    container: _objectSpread(_objectSpread({}, props.pass_style), {}, {
      boxSizing: 'border-box',
      zIndex: '10001',
      // margin: theme.spacing[3],
      background: theme.background,
      color: theme.text,
      // maxWidth: theme.maxWidth,
      // minWidth: theme.minWidth,
      // fontSize:theme.fontSize[1],
      position: LOC.E ? 'absolute' : 'fixed',
      //! if using 'fixed' - remove SCROLL_TOP from _getLocation()
      // transition: '.5s', /// causes popper to start from 0,0 and animate to position
      // opacity: S.guideOpen ? '1' : '.2', 
      // transition: 'opacity .5s'
      opacity: .6
    }),
    header: {
      fontSize: theme.fontSize[2],
      borderBottom: border.secondary.type,
      borderColor: border.secondary.color,
      padding: theme.spacing[2]
    },
    content: {
      fontSize: theme.fontSize[1],
      padding: theme.spacing[2]
    },
    footer: {
      padding: theme.spacing[2],
      display: 'flex',
      justifyContent: 'space-between'
    },
    exitButton: {
      color: 'red'
    }
  };
  var data = {
    /// tour / steps
    tour: S.activeTour,
    stepTime: S.apValue,
    stepTimeTotal: S.activeStepData.stepDuration,
    /// content
    currentStep: S.activeStepData.step,
    totalSteps: S.activeStepData.totalSteps,
    title: S.activeStepData.title,
    content: S.activeStepData.content,
    /// labels
    closeLabel: S.activeStepData.closeLabel,
    nextLabel: S.activeStepData.nextLabel,
    prevLabel: S.activeStepData.prevLabel,
    /// controls
    next: function next() {
      return _animatour["default"].next();
    },
    prev: function prev() {
      return _animatour["default"].prev();
    },
    play: function play() {
      return _animatour["default"].play();
    },
    pause: function pause() {
      return _animatour["default"].pause();
    },
    close: function close() {
      return _animatour["default"].close();
    },
    reset: function reset() {
      return _animatour["default"].reset();
    },
    /// animations
    transitionDuration: S.activeStepData.duration,
    /// adv data
    debugMode: S.debug
  };

  var NoBrochure = function NoBrochure() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: s.header,
      className: "header"
    }, ASD.step, " - ", ASD.title), /*#__PURE__*/_react["default"].createElement("div", {
      style: s.content,
      className: "content"
    }, ASD.content), /*#__PURE__*/_react["default"].createElement("div", {
      style: s.footer,
      className: "footer"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      style: s.exitButton,
      onClick: function onClick() {
        return _animatour["default"].close();
      }
    }, ASD.exitLabel), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
      style: s.prevButton,
      onClick: function onClick() {
        return _animatour["default"].play();
      }
    }, "Play"), /*#__PURE__*/_react["default"].createElement("button", {
      style: s.prevButton,
      onClick: function onClick() {
        return _animatour["default"].pause();
      }
    }, "Pause"), /*#__PURE__*/_react["default"].createElement("button", {
      style: s.prevButton,
      onClick: function onClick() {
        return _animatour["default"].prev(ASD.tour);
      }
    }, ASD.prevLabel), /*#__PURE__*/_react["default"].createElement("button", {
      style: s.nextButton,
      onClick: function onClick() {
        return _animatour["default"].next(ASD.tour);
      }
    }, ASD.nextLabel))), props.children, S.apActive && /*#__PURE__*/_react["default"].createElement("progress", {
      id: "apv",
      style: {
        width: '100%',
        margin: '0'
      },
      value: ASD.stepDuration - S.apValue,
      max: ASD.stepDuration
    }));
  };

  var determineActiveBrochure = function determineActiveBrochure() {
    if (S.modal && /*#__PURE__*/_react["default"].isValidElement(S.modal)) {
      return /*#__PURE__*/_react["default"].cloneElement(S.modal, _objectSpread({}, data));
    } else {
      return NoBrochure;
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: s.container,
    className: "brochure1",
    id: "BROCHURE"
  }, determineActiveBrochure());
});

var _default = B1;
exports["default"] = _default;