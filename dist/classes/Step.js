"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shout = _interopRequireDefault(require("../utils/shout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Step = function Step(x, state) {
  _classCallCheck(this, Step);

  /// alert user of incorrect keys
  Object.keys(x).forEach(function (key) {
    switch (key) {
      case 'nme':
      case 'nam':
      case 'name':
        _shout["default"].warn("addSteps | '".concat(key, "' was used... did you mean 'title' ?"));

        break;

      case 'txt':
      case 'text':
      case 'cont':
      case 'conten':
      case 'cntent':
        _shout["default"].warn("addSteps | '".concat(key, "' was used... did you mean 'content' ?"));

        break;

      case 'el':
      case 'el':
      case 'elmnt':
      case 'elemnt':
      case 'lement':
      case 'elemen':
      case 'elemet':
        _shout["default"].warn("addSteps | '".concat(key, "' was used... did you mean 'element' ?"));

        break;
    }
  });
  this.id = x.id;
  this.title = x.title ? x.title : _shout["default"].error("Steps must at least include a title.");
  this.element = x.element || null;
  this.content = x.content || null;
  this.transitionDuration = x.transitionDuration || state.defaultSettings.transitionDuration;
  this.stepDuration = x.stepDuration || state.defaultSettings.stepDuration;
};

var _default = Step;
exports["default"] = _default;