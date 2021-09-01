"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Step = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createSteps = function createSteps(steps, oldSteps) {
  var stepsArray = Array.isArray(oldSteps) ? oldSteps : [oldSteps]; /// create a temporary array to hold steps during parse

  Array.isArray(steps) /// if array of steps was passed - iterate and push to temp array
  ? steps.forEach(function (x) {
    stepsArray.push(new _Step["default"](x));
  }) : stepsArray.push(new _Step["default"](steps)); /// else push single step to temp array

  return stepsArray; /// return the temp array
};

var _default = createSteps;
exports["default"] = _default;