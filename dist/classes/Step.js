"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shout = _interopRequireDefault(require("../utils/shout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Step = function Step(data) {
  var _step$element, _step$content, _step$transitionDurat, _step$stepDuration, _step$closeLabel, _step$nextLabel, _step$nextLabel2, _step$ringMargin, _step$ringColor, _step$ringWidth;

  _classCallCheck(this, Step);

  var step = data.step,
      globalSettings = data.globalSettings,
      tourSettings = data.tourSettings; // console.log('Step | data:',data)
  /// alert user of incorrect keys

  Object.keys(step).forEach(function (key) {
    switch (key) {
      case 'nme':
      case 'nam':
      case 'name':
        _shout["default"].warn("addSteps | '".concat(key, "' was used... did you mean 'title' ?"));

        break;

      case 'tstept':
      case 'testept':
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
  }); // use unique id for tracking or filtering a step?
  // this.id                     = step.id

  this.title = step.title ? step.title : _shout["default"].error("Steps must at least include a title.");
  this.element = (_step$element = step.element) !== null && _step$element !== void 0 ? _step$element : null;
  this.content = (_step$content = step.content) !== null && _step$content !== void 0 ? _step$content : null; /// use tourSetting if step.setting does not exist
  // step settings will override default settings

  this.transitionDuration = (_step$transitionDurat = step.transitionDuration) !== null && _step$transitionDurat !== void 0 ? _step$transitionDurat : tourSettings.transitionDuration;
  this.stepDuration = (_step$stepDuration = step.stepDuration) !== null && _step$stepDuration !== void 0 ? _step$stepDuration : tourSettings.stepDuration; // labels

  this.closeLabel = (_step$closeLabel = step.closeLabel) !== null && _step$closeLabel !== void 0 ? _step$closeLabel : tourSettings.closeLabel;
  this.nextLabel = (_step$nextLabel = step.nextLabel) !== null && _step$nextLabel !== void 0 ? _step$nextLabel : tourSettings.nextLabel;
  this.prevLabel = (_step$nextLabel2 = step.nextLabel) !== null && _step$nextLabel2 !== void 0 ? _step$nextLabel2 : tourSettings.prevLabel; // ring

  this.ringMargin = (_step$ringMargin = step.ringMargin) !== null && _step$ringMargin !== void 0 ? _step$ringMargin : tourSettings.ringMargin;
  this.ringColor = (_step$ringColor = step.ringColor) !== null && _step$ringColor !== void 0 ? _step$ringColor : tourSettings.ringColor;
  this.ringWidth = (_step$ringWidth = step.ringWidth) !== null && _step$ringWidth !== void 0 ? _step$ringWidth : tourSettings.ringWidth;
};

var _default = Step;
exports["default"] = _default;