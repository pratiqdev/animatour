"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shout = _interopRequireDefault(require("../utils/shout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Step = function Step(x) {
  _classCallCheck(this, Step);

  /// alert user of incorrect keys
  Object.keys(x).forEach(function (key) {
    switch (key) {
      case 'nme':
      case 'nam':
      case 'name':
        _shout["default"].warn("addSteps | '".concat(key, "' was used... did you mean 'title' ?"));

        break;
    }
  });
  this.id = x.id;
  this.title = x.title;
  this.element = x.element ? x.element : _shout["default"].error("Steps must include an element.", "Use element selectors ('.el', '#el')");
  this.content = x.content ? x.content : _shout["default"].error("Steps must include content");
};

var _default = Step;
exports["default"] = _default;