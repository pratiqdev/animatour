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

var FTO = true;
var externalASD = null; // let globalTimeline = gsap.timeline()

var Collection = function Collection(props) {
  // console.log(`Collection | render()`)
  if (!props.state) {
    console.log('Collection | No state passed to collection');
    return false;
  } // let LOC = props.state.location


  var locationFound;
  var ASD = props.ASD;

  var _useState = (0, _react.useState)('X'),
      _useState2 = _slicedToArray(_useState, 2),
      perf = _useState2[0],
      setPerf = _useState2[1]; // console.log('Collection | new instance - asd:', ASD)
  // request handle
  // let requestFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  // let cancelFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


  var requestHandle; /// POPPER _____________________________________________________________________________________________________________________________

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
      update = _usePopper.update; /// GET LOCATION _______________________________________________________________________________________________________________________


  var getLocationOfElement = function getLocationOfElement() {
    // console.log(`Collection | getLocationOfElement - element: ${ASD.element}`)
    var LOC = {
      /** Scroll Top */
      ST: window.pageYOffset || (document.body.parentNode || document.body).scrollTop,

      /** Window Width */
      WW: Math.floor(window.innerWidth || 0),

      /** Window Height */
      WH: Math.floor(window.innerHeight || 0),

      /** Element Exists */
      E: null,

      /** Height */
      H: null,

      /** Width */
      W: null,

      /** Top Offset */
      T: null,

      /** Left Offset */
      L: null
    };

    var setDefaultLoc = function setDefaultLoc() {
      //   console.log('Collection | getLocationOfElement - set default location')
      LOC.E = false;
      LOC.H = 0;
      LOC.W = 0;
      LOC.T = LOC.WH / 2;
      LOC.L = LOC.WW / 2;
    };

    if (props.ASD && props.ASD.element !== '' && typeof props.ASD.element !== 'null') {
      var EL = document.querySelector(props.ASD.element) || null; // element could not be found

      if (!EL) {
        setDefaultLoc();
        return LOC;
      } else {
        var EL_RECT = EL.getBoundingClientRect();
        LOC.E = true;
        LOC.L = Math.round(EL_RECT.left - props.ASD.ringMargin);
        LOC.T = Math.round(EL_RECT.top + LOC.ST - props.ASD.ringMargin);
        LOC.H = Math.round(EL_RECT.height + props.ASD.ringMargin * 2);
        LOC.W = Math.round(EL_RECT.width + props.ASD.ringMargin * 2); // console.log('Collection | getLocationOfElement - set element location:', LOC)

        return LOC;
      }
    } else {
      setDefaultLoc();
      return LOC;
    }
  }; // let localTimeline = gsap.timeline()


  var tween;

  var animateToPosition = function animateToPosition() {
    if (referenceElement) {
      locationFound = getLocationOfElement();

      if (ASD.step == 5) {
        console.log("Collection | animateToPosition - el 5 LEFT: ".concat(locationFound.L));
      } // let superLocalTimeline = gsap.timeline()


      tween = _gsap["default"].to(referenceElement, {
        duration: 1,
        //ASD.transitionDuration, 
        width: locationFound.W,
        height: locationFound.H,
        x: locationFound.L,
        y: locationFound.T,
        borderWidth: ASD.ringWidth,
        borderColor: ASD.ringColor,
        borderRadius: '.5rem',
        boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
        // onComplete: console.log('Collection | gsap anim completed'),
        // onUpdate: console.log('Collection | gsap update'),
        repeatRefresh: true,
        overwrite: 'auto'
      });

      if (FTO) {
        FTO = false;
      }

      update();
    } else {
      console.error("Collection | updatePositions() - no reference element");
    }
  }; /// RUN SEQUENCE _______________________________________________________________________________________________________________________


  var runSequence = function runSequence() {
    if (props.state.guideOpen) {
      // console.log(`Collection | running`)
      var t0 = performance.now();
      animateToPosition();
      var t1 = performance.now();
      setPerf(t1 - t0);
      requestHandle = window.requestAnimationFrame(runSequence);
    }
  }; /// OPEN / CLOSE _______________________________________________________________________________________________________________________


  var handleGuideOpen = function handleGuideOpen() {
    FTO = true; // console.log('Collection | handleGuideOpen')

    if (referenceElement) {
      _gsap["default"].to([referenceElement, popperElement], {
        display: 'block',
        duration: ASD.transitionDuration,
        // FTO ? 0 : ASD.duration, 
        autoAlpha: 1
      });
    }
  };

  var handleGuideClose = function handleGuideClose() {
    // console.log(`Collection | handleGuideClose - guideOpen: ${props.state.guideOpen}`)
    if (referenceElement) {
      var tl_close = new _gsap.TimelineMax();
      tl_close.to([referenceElement, popperElement], {
        duration: ASD.transitionDuration,
        // FTO ? 0 : ASD.duration, 
        autoAlpha: 0
      }, 0);
    }
  }; /// RUN SEQUENCE ON PROPS CHANGE _______________________________________________________________________________________________________


  (0, _react.useEffect)(function () {
    ASD = props.ASD; // console.log(`Collection | useEffect - props change - ASD:`, ASD)

    if (props.state.guideOpen) {
      console.log('Collection | run sequence');
      runSequence(); // handleGuideOpen()
    } else {
      // handleGuideClose()
      console.log('Collection | stopped');
      window.cancelAnimationFrame(requestHandle);
      setPerf('X');
    }

    return function () {
      window.cancelAnimationFrame(requestHandle);
      tween = null;
      console.log('Collection | nullified the tween');
    };
  }, [props]); /// HANDLE GUIDE OPEN / CLOSE __________________________________________________________________________________________________________

  (0, _react.useEffect)(function () {
    // console.log(`Collection | useEffect - guideOpen change`)
    if (props.state.guideOpen) {
      handleGuideOpen();
    } else {
      handleGuideClose();
    }
  }, [props.state.guideOpen]); /// CLONING ____________________________________________________________________________________________________________________________

  var dataForClone = {
    /// tour / steps
    tour: props.state.activeTour,
    stepTime: props.state.apValue,
    stepTimeTotal: props.ASD.stepDuration,
    /// content
    currentStep: props.ASD.step,
    totalSteps: props.ASD.totalSteps,
    title: props.ASD.title,
    content: props.ASD.content,
    /// labels
    closeLabel: props.ASD.closeLabel,
    nextLabel: props.ASD.nextLabel,
    prevLabel: props.ASD.prevLabel,
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
    transitionDuration: props.ASD.duration,
    /// adv data
    debugMode: props.state.debug
  };

  var baseStylesForClone = _objectSpread({
    zIndex: '10001'
  }, styles.popper);

  var cloneBrochureWithData = function cloneBrochureWithData() {
    if (props.state.modal && /*#__PURE__*/_react["default"].isValidElement(props.state.modal)) {
      return /*#__PURE__*/_react["default"].cloneElement(props.state.modal, _objectSpread({}, dataForClone));
    }
  };

  var brochureClone = cloneBrochureWithData();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'fixed',
      top: '0',
      left: '0',
      background: '#f66',
      padding: '5px',
      width: '2rem',
      zIndex: '9999999'
    }
  }, perf), /*#__PURE__*/_react["default"].createElement("div", {
    ref: setReferenceElement,
    id: "refElId",
    style: {
      position: "absolute",
      display: 'none',
      visibility: 'hidden',
      zIndex: '10000',
      opacity: 0,
      border: '0px solid transparent'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: setPopperElement,
    style: baseStylesForClone,
    id: "BROCHURE"
  }, brochureClone));
};

var _default = Collection;
exports["default"] = _default;