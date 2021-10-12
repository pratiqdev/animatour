"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  container: {
    boxSizing: 'border-box',
    zIndex: '10001',
    background: theme.background,
    color: theme.text,
    position: 'absolute',
    opacity: .2,
    display: 'none'
  },
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

var B3 = function B3(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: style.header,
    className: "header"
  }, props.step, " - ", props.title), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.content,
    className: "content"
  }, props.content), /*#__PURE__*/_react["default"].createElement("div", {
    style: style.footer,
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: style.exitButton,
    onClick: props.close
  }, props.exitLabel), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    style: style.prevButton,
    onClick: props.play
  }, "Play"), /*#__PURE__*/_react["default"].createElement("button", {
    style: style.prevButton,
    onClick: props.pause
  }, "Pause"), /*#__PURE__*/_react["default"].createElement("button", {
    style: style.prevButton,
    onClick: props.prev
  }, props.prevLabel), /*#__PURE__*/_react["default"].createElement("button", {
    style: style.nextButton,
    onClick: props.next
  }, props.nextLabel), /*#__PURE__*/_react["default"].createElement("button", {
    onMouseOver: function onMouseOver() {
      return console.log('TEST on mouse over');
    },
    onClick: function onClick() {
      return console.log('TEST click');
    }
  }, "TEST"))), props.children);
};

var _default = B3;
exports["default"] = _default;