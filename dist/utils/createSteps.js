"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Step = _interopRequireDefault(require("../classes/Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _createSteps = function _createSteps(data) {
  var oldSteps = data.oldSteps,
      newSteps = data.newSteps,
      tourSettings = data.tourSettings; // console.log('createSteps | data: ', data)

  if (!newSteps) {
    if (!oldSteps) {
      return [];
    } else {
      return oldSteps;
    }
  }

  var stepsArray = [];

  if (Array.isArray(oldSteps)) {
    oldSteps.forEach(function (step_x) {
      step_x && stepsArray.push(step_x);
    });
  } else {
    oldSteps && stepsArray.push(oldSteps);
  }

  if (Array.isArray(newSteps)) {
    newSteps.forEach(function (step_x) {
      step_x && stepsArray.push(new _Step["default"]({
        step: step_x,
        tourSettings: tourSettings
      }));
    });
  } else {
    newSteps && stepsArray.push(steps);
  }

  return stepsArray;
};

var _default = _createSteps;
exports["default"] = _default;