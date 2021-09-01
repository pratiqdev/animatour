"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var x = null;

var w = function w(func) {
  if (window && typeof window !== 'undefined' && window.main && typeof window.main !== 'undefined') {
    if (!x) {
      x = window.main;
    }

    return true;
  } else {
    console.log("You cannot call '".concat(func, "' without a guide component"));
    return false;
  }
};

var animatour = {
  getSteps: function getSteps(tourId) {
    return w('get steps') && x.getSteps(tourId);
  },
  // toggle the guide
  showGuide: function showGuide() {
    w('show guide') && x.showGuide();
  },
  hideGuide: function hideGuide() {
    w('show guide') && x.hideGuide();
  },
  // add steps
  addSteps: function addSteps(tourId, newSteps) {
    w('show guide') && x.addSteps(tourId, newSteps);
  },
  // control the steps
  next: function next(tourId) {
    w('next step') && x.next(tourId);
  },
  prev: function prev(tourId) {
    w('prev step') && x.prev(tourId);
  },
  exit: function exit(tourId) {
    w('prev step') && x.exit(tourId);
  }
};
var _default = animatour;
exports["default"] = _default;