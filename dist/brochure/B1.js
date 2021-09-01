"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _animatour = _interopRequireDefault(require("../animatour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var B1 = function B1(props) {
  var tour = props.tour;
  (0, _react.useEffect)(function () {
    console.log("Brochure | ".concat(tour.id, " - ").concat(tour.currentStep));
  });

  if (!tour) {
    shout('error', "Must provide a tour when using a Brochure: '<Brochure tour=\"My Tour\"/>'");
    return false;
  }

  var theme = {
    text: '#222',
    background: '#eee',
    primary: '#99f',
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
    container: {
      margin: theme.spacing[3],
      background: theme.background,
      // color: theme.text,
      maxWidth: theme.maxWidth,
      minWidth: theme.minWidth,
      width: theme.width,
      fontSize: theme.fontSize[2]
    },
    header: {
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
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: s.container,
    className: "brochure",
    id: "B1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: s.header,
    className: "header"
  }, "(", tour.id, "-", tour.currentStep, ") Step Title (B1)"), /*#__PURE__*/_react["default"].createElement("div", {
    style: s.content,
    className: "content"
  }, tour.steps[tour.currentStep].content), /*#__PURE__*/_react["default"].createElement("div", {
    style: s.footer,
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: s.exitButton,
    onClick: function onClick() {
      return _animatour["default"].exit(tour.id);
    }
  }, "exit"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    style: s.prevButton,
    onClick: function onClick() {
      return _animatour["default"].prev(tour.id);
    }
  }, '<'), /*#__PURE__*/_react["default"].createElement("button", {
    style: s.nextButton,
    onClick: function onClick() {
      return _animatour["default"].next(tour.id);
    }
  }, '>'))));
};

var _default = B1;
exports["default"] = _default;