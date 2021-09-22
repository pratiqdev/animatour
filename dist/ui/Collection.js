"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

var B = _interopRequireWildcard(require("./brochure"));

var _Ring = _interopRequireDefault(require("./Ring"));

var _gsap = _interopRequireWildcard(require("gsap"));

var _animatour = _interopRequireDefault(require("../animatour"));

var _scrollToElement2 = _interopRequireDefault(require("../utils/scrollToElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Collection = function Collection(props) {
  var LOC = props.state.location;
  var ASD = props.state.activeStepData;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      FTO = _useState2[0],
      setFTO = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      referenceElement = _useState4[0],
      setReferenceElement = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      popperElement = _useState6[0],
      setPopperElement = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      arrowElement = _useState8[0],
      setArrowElement = _useState8[1];

  if (!props.state) {
    console.log('Collection | No state passed to collection');
    return false;
  } //~ A.2 - check if reference exists and exec anims


  var handleGuideOpen = function handleGuideOpen() {
    console.log('Collection | handleGuideOpen');

    if (referenceElement) {
      console.log('Collection | opening'); // let tl_open = new TimelineMax()

      _gsap["default"].to([referenceElement, popperElement], {
        display: 'block',
        duration: 3 || ASD.transitionDuration,
        // FTO ? 0 : ASD.duration, 
        opacity: 1
      });
    }
  };

  var handleGuideClose = function handleGuideClose() {
    console.log('Collection | handleGuideClose');

    if (referenceElement) {
      console.log('Collection | closing');
      var tl_close = new _gsap.TimelineMax();
      tl_close.to([referenceElement, popperElement], {
        duration: 3 || ASD.transitionDuration,
        // FTO ? 0 : ASD.duration, 
        opacity: 0
      }, 0);
      tl_close.to([referenceElement, popperElement], {
        display: 'none'
      }, 3 || ASD.transitionDuration);
    }
  };

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 8] //! should use two values from settings - offset and alignment?

      }
    }]
  }),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      update = _usePopper.update;

  var updatePositions = function updatePositions() {
    if (referenceElement) {
      var t1 = new _gsap.TimelineMax();
      t1.to(referenceElement, {
        duration: FTO ? 0 : ASD.transitionDuration || 0,
        // FTO ? 0 : ASD.duration, 
        // duration: ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
        width: LOC.W + parseInt(ASD.ringWidth) * 2,
        height: LOC.H + parseInt(ASD.ringWidth) * 2,
        x: LOC.L - parseInt(ASD.ringWidth),
        y: LOC.T - parseInt(ASD.ringWidth),
        borderWidth: ASD.ringWidth,
        borderColor: ASD.ringColor,
        borderRadius: '.5rem',
        boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)'
      }, 0);
      FTO && setFTO(false);
    }
  };

  (0, _react.useEffect)(function () {
    if (update && props.state.guideOpen) {
      updatePositions();
      update();
    }

    LOC = props.state.location;
    ASD = props.state.activeStepData;
  }, [props.state]); //~ A.1 - state.guideOpen set to true => setShowElements(true)

  (0, _react.useEffect)(function () {
    props.state.guideOpen ? handleGuideOpen() : handleGuideClose();
  }, [props.state.guideOpen]);
  var clonedBrochureData = {
    /// tour / steps
    tour: props.state.activeTour,
    stepTime: props.state.apValue,
    stepTimeTotal: props.state.activeStepData.stepDuration,
    /// content
    currentStep: props.state.activeStepData.step,
    totalSteps: props.state.activeStepData.totalSteps,
    title: props.state.activeStepData.title,
    content: props.state.activeStepData.content,
    /// labels
    closeLabel: props.state.activeStepData.closeLabel,
    nextLabel: props.state.activeStepData.nextLabel,
    prevLabel: props.state.activeStepData.prevLabel,
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
    transitionDuration: props.state.activeStepData.duration,
    /// adv data
    debugMode: props.state.debug
  };
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
  var style = {
    container: _objectSpread(_objectSpread({}, styles.popper), {}, {
      boxSizing: 'border-box',
      zIndex: '10001',
      background: theme.background,
      color: theme.text,
      position: LOC.E ? 'absolute' : 'fixed',
      //! if using 'fixed' - remove SCROLL_TOP from _getLocation()
      opacity: .2,
      display: 'none'
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

  var NoBrochure = function NoBrochure() {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: style.header,
      className: "header"
    }, ASD.step, " - ", ASD.title), /*#__PURE__*/_react["default"].createElement("div", {
      style: style.content,
      className: "content"
    }, ASD.content), /*#__PURE__*/_react["default"].createElement("div", {
      style: style.footer,
      className: "footer"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      style: style.exitButton,
      onClick: function onClick() {
        return _animatour["default"].close();
      }
    }, ASD.exitLabel), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
      style: style.prevButton,
      onClick: function onClick() {
        return _animatour["default"].play();
      }
    }, "Play"), /*#__PURE__*/_react["default"].createElement("button", {
      style: style.prevButton,
      onClick: function onClick() {
        return _animatour["default"].pause();
      }
    }, "Pause"), /*#__PURE__*/_react["default"].createElement("button", {
      style: style.prevButton,
      onClick: function onClick() {
        return _animatour["default"].prev();
      }
    }, ASD.prevLabel), /*#__PURE__*/_react["default"].createElement("button", {
      style: style.nextButton,
      onClick: function onClick() {
        return _animatour["default"].next();
      }
    }, ASD.nextLabel), /*#__PURE__*/_react["default"].createElement("button", {
      onMouseOver: function onMouseOver() {
        return console.log('TEST on mouse over');
      },
      onClick: function onClick() {
        return console.log('TEST click');
      }
    }, "TEST"))), props.children, props.state.apActive && /*#__PURE__*/_react["default"].createElement("progress", {
      id: "apv",
      style: {
        width: '100%',
        margin: '0'
      },
      value: ASD.stepDuration - props.state.apValue,
      max: ASD.stepDuration
    }));
  };

  var determineActiveBrochure = function determineActiveBrochure() {
    if (props.state.modal && /*#__PURE__*/_react["default"].isValidElement(props.state.modal)) {
      // console.log('Collection | using supplied brochure')
      return /*#__PURE__*/_react["default"].cloneElement(props.state.modal, _objectSpread({}, clonedBrochureData));
    } else {
      // console.log('Collection | using built-in brochure')
      return /*#__PURE__*/_react["default"].createElement(NoBrochure, null);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: setReferenceElement,
    style: {
      boxSizing: 'border-box',
      position: "absolute",
      display: 'none',
      border: '1px solid transparent',
      zIndex: '10000',
      opacity: .2
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: setPopperElement,
    style: style.container,
    className: "brochure1",
    id: "BROCHURE"
  }, determineActiveBrochure()));
};

var _default = Collection;
exports["default"] = _default;