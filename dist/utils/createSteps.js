"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Step = _interopRequireDefault(require("../classes/Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _createSteps = function _createSteps(x) {
  var steps = x.steps,
      oldSteps = x.oldSteps,
      state = x.state;

  if (!steps) {
    if (oldSteps) {
      return oldSteps;
    } else {
      return [];
    }
  }

  var stepsArray = [];

  if (Array.isArray(oldSteps)) {
    oldSteps.forEach(function (x) {
      if (x) {
        stepsArray.push(x);
      }
    });
  } else {
    if (oldSteps) {
      stepsArray.push(oldSteps);
    }
  }

  if (Array.isArray(steps)) {
    steps.forEach(function (x) {
      if (x) {
        stepsArray.push(new _Step["default"](x, state));
      }
    });
  } else {
    if (steps) {
      stepsArray.push(steps);
    }
  }

  return stepsArray;
};

var _default = _createSteps;
exports["default"] = _default;