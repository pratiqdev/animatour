"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../style/datalist.css");

var _animatour = _interopRequireDefault(require("../animatour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataList = function DataList(_ref) {
  var data = _ref.data;
  // let dataset = []
  // for (const [key, value] of Object.entries(data)) {
  //     if(key !== 'defaultSettings' && key !== 'mainProps'){
  //         dataset.push(`${key}: ${value}`)
  //     }
  // }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "datalist"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return _animatour["default"].start();
    }
  }, "Start"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return _animatour["default"].open();
    }
  }, "Open"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return _animatour["default"].close();
    }
  }, "Close"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return _animatour["default"].next();
    }
  }, "Next"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return _animatour["default"].prev();
    }
  }, "Prev"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return _animatour["default"].reset();
    }
  }, "Reset"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return console.log(_animatour["default"].getTour('Default Tour'));
    }
  }, "Get Tour ('Default Tour')"), data.activeStepData ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h4", null, "Active Step Data"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Tour"), /*#__PURE__*/_react["default"].createElement("td", null, data.activeStepData.tour)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Step"), /*#__PURE__*/_react["default"].createElement("td", null, data.activeStepData.step)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "element"), /*#__PURE__*/_react["default"].createElement("td", null, data.activeStepData.element))))) : /*#__PURE__*/_react["default"].createElement("h4", null, "No Active Step Data"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h4", null, "State"), /*#__PURE__*/_react["default"].createElement("p", null, "Active Tour: ", data.activeTour), /*#__PURE__*/_react["default"].createElement("p", null, "Guide open: ", data.guideOpen ? 'true' : 'false'), /*#__PURE__*/_react["default"].createElement("p", null, "T: ", data.location ? data.location.T : 'none'), /*#__PURE__*/_react["default"].createElement("p", null, "L: ", data.location ? data.location.L : 'none'));
};

var _default = DataList;
exports["default"] = _default;