"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

var B = _interopRequireWildcard(require("./brochure"));

var _gsap = _interopRequireDefault(require("gsap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Collection = function Collection(props) {
  // console.log('collection props', props)
  var D = {};

  if (!props.data) {
    // console.log('Collection | No data was found for collection')
    return false;
  } else {
    D = props.data; // console.log('Collection | data:', D)
  }

  var LOC = props.loc;

  if (!LOC) {
    return false;
  }

  var FTO = true; /// First Time Opened
  /// if the first element has been found, set FTO to false
  /// this allows start step to appear centered

  if (LOC.E) {
    FTO = false;
  } /// if brochure is closed, reset FTO to true so it reopens at location if exists


  if (!props.open) {
    FTO = true;
  }

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      referenceElement = _useState2[0],
      setReferenceElement = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      popperElement = _useState4[0],
      setPopperElement = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      arrowElement = _useState6[0],
      setArrowElement = _useState6[1];

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  }),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      update = _usePopper.update;

  var updatePositions = function updatePositions() {
    _gsap["default"].to(referenceElement, {
      duration: FTO ? 0 : D.duration,
      opacity: LOC.E ? 1 : .5,
      width: "".concat(LOC.W + parseInt(D.ringWidth) * 2, "px"),
      height: "".concat(LOC.H + parseInt(D.ringWidth) * 2, "px"),
      left: "".concat(LOC.L - parseInt(D.ringWidth), "px"),
      top: "".concat(LOC.T - parseInt(D.ringWidth), "px"),
      borderWidth: D.ringWidth,
      borderColor: D.ringColor,
      borderRadius: '.5rem',
      boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)'
    });

    update();
  };

  (0, _react.useEffect)(function () {
    if (update) {
      updatePositions();
    }
  }, [props.loc]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: setReferenceElement,
    style: {
      boxSizing: 'border-box',
      position: "absolute",
      display: props.open ? 'block' : 'none',
      border: '1px solid transparent',
      zIndex: '10000'
    }
  }), /*#__PURE__*/_react["default"].createElement(B.B1, {
    ref: setPopperElement,
    open: props.open,
    pass_style: styles.popper,
    data: props.data,
    loc: props.loc
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: setArrowElement,
    style: styles.arrow
  })));
};

var _default = Collection;
exports["default"] = _default;