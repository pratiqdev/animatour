"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _shout = _interopRequireDefault(require("../utils/shout"));

var _createSteps = _interopRequireDefault(require("../utils/createSteps"));

var _brochure = require("../ui/brochure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tour = // x is config
function Tour(data) {
  var _config$stepDuration, _config$stepDuration2, _config$transitionDur, _config$closeLabel, _config$nextLabel, _config$prevLabel, _config$ringMargin, _config$ringColor, _config$ringWidth;

  _classCallCheck(this, Tour);

  var tourId = data.tourId,
      config = data.config,
      globalSettings = data.globalSettings;

  if (!tourId) {
    _shout["default"].error("Must provide at least a tour name when creating a new tour: 'newTour('tour id', {...config})'");

    return false;
  } /// alert user of incorrect keys


  Object.keys(config).forEach(function (key) {
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
  this.modal = config.modal || null; //>_______________________________________________________________________________________________________________________
  //? how should tour settings be defined??
  //> step settings have precedence over tour settings
  //> tour settings have precedence over default settings...
  //>
  //? how will steps access tour settings?
  //> globalSettings and tourSettings should be passed to createSteps / Step
  //>_______________________________________________________________________________________________________________________

  /** @deprecated use 'tourSettings.stepDuration' */

  this.stepDuration = (_config$stepDuration = config.stepDuration) !== null && _config$stepDuration !== void 0 ? _config$stepDuration : globalSettings.stepDuration;
  this.tourSettings = {
    stepDuration: (_config$stepDuration2 = config.stepDuration) !== null && _config$stepDuration2 !== void 0 ? _config$stepDuration2 : globalSettings.stepDuration,
    transitionDuration: (_config$transitionDur = config.transitionDuration) !== null && _config$transitionDur !== void 0 ? _config$transitionDur : globalSettings.transitionDuration,
    // labels
    closeLabel: (_config$closeLabel = config.closeLabel) !== null && _config$closeLabel !== void 0 ? _config$closeLabel : globalSettings.closeLabel,
    nextLabel: (_config$nextLabel = config.nextLabel) !== null && _config$nextLabel !== void 0 ? _config$nextLabel : globalSettings.nextLabel,
    prevLabel: (_config$prevLabel = config.prevLabel) !== null && _config$prevLabel !== void 0 ? _config$prevLabel : globalSettings.prevLabel,
    // ring
    ringMargin: (_config$ringMargin = config.ringMargin) !== null && _config$ringMargin !== void 0 ? _config$ringMargin : globalSettings.ringMargin,
    ringColor: (_config$ringColor = config.ringColor) !== null && _config$ringColor !== void 0 ? _config$ringColor : globalSettings.ringColor,
    ringWidth: (_config$ringWidth = config.ringWidth) !== null && _config$ringWidth !== void 0 ? _config$ringWidth : globalSettings.ringWidth
  };
  this.steps = (0, _createSteps["default"])({
    newSteps: config.steps,
    tourSettings: this.tourSettings
  }); /// currentStep 
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /// ensure that the currentStep is within the range of 0 and number of steps

  if (config.currentStep < 0) {
    _shout["default"].warn("newTour({currentStep: ".concat(config.currentStep, "}) \n 'currentStep' was less than 0 \n defaulting to 0 (first step)"));

    this.currentStep = 0;
  } else if (config.currentStep > this.steps.length - 1) {
    _shout["default"].warn("newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ".concat(this.steps.length === 0 ? 0 : this.steps.length - 1, " (last step)"));

    this.currentStep = this.steps.length === 0 ? 0 : this.steps.length - 1;
  } else {
    this.currentStep = config.currentStep;
  } /// modal 
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /// if a modal is supplied - make sure it is a valid element
  /// if no modal supplied - use default (0) built-in modal


  if (!config.modal) {
    this.modal = /*#__PURE__*/_react["default"].createElement(_brochure.B3, null);
    console.log('Tour | using default modal: <B3 />');
  } else {
    if (typeof config.modal === 'number') {
      switch (config.modal) {
        case 0:
          {
            console.log('Tour | using modal: 0');
          }
          ;
          break;

        default:
          {
            _shout["default"].warn("newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ".concat(this.steps.length - 1, " (last step)"));
          }
      }
    } else if (config.modal && /*#__PURE__*/_react["default"].isValidElement(config.modal)) {
      this.modal = config.modal;
      console.log('Tour | using modal from tour creation');
    }
  }
};

var _default = Tour;
exports["default"] = _default;