"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shout = _interopRequireDefault(require("./shout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tour = function Tour(tourId, x) {
  _classCallCheck(this, Tour);

  if (!tourId) {
    (0, _shout["default"])('error', "Must provide at least a tour name when creating a new tour: 'newTour('tour id', {...config})'");
    return false;
  } /// alert user of incorrect keys


  Object.keys(x).forEach(function (key) {
    switch (key) {
      case 'nme':
      case 'nam':
      case 'name':
        (0, _shout["default"])('error', "addSteps | '".concat(key, "' was used... did you mean 'title' ?"));
        break;
    }
  });
  this.id = tourId;
  this.currentStep = x.title;
  this.content = x.content ? x.content : (0, _shout["default"])('error', "Steps must include content");
};

var _default = Tour;
exports["default"] = _default;