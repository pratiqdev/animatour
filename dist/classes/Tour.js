"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shout = _interopRequireDefault(require("../utils/shout"));

var _createSteps = _interopRequireDefault(require("../utils/createSteps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var totalNumberOfBrochureVariants = 1; // (2) - 0,1

var Tour = function Tour(tourId, x, state) {
  _classCallCheck(this, Tour);

  if (!tourId) {
    _shout["default"].error("Must provide at least a tour name when creating a new tour: 'newTour('tour id', {...config})'");

    return false;
  } /// alert user of incorrect keys


  Object.keys(x).forEach(function (key) {
    switch (key) {
      case 'step':
      case 'useStep':
      case 'current':
      case 'currentStp':
      case 'currntStep':
        _shout["default"].warn("newTour | '".concat(key, "' was used... did you mean 'currentStep' ?"));

        break;
    }
  });
  this.id = tourId;
  this.modal = x.modal || null;
  this.steps = (0, _createSteps["default"])({
    steps: x.steps,
    state: state
  }); //- currentStep ____________________________________________________________________________________________________________________

  if (x.currentStep < 0) {
    _shout["default"].warn("newTour({currentStep: ".concat(x.currentStep, "}) \n 'currentStep' was less than 0 \n defaulting to 0 (first step)"));

    this.currentStep = 0;
  } else if (x.currentStep > this.steps.length - 1) {
    _shout["default"].warn("newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ".concat(this.steps.length - 1, " (last step)"));

    this.currentStep = this.steps.length - 1;
  } else {
    this.currentStep = x.currentStep;
  }
};

var _default = Tour;
exports["default"] = _default;