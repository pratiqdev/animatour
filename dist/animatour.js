"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var x = null;
/** Verify access to the window and main component */

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
  getAllTours: function getAllTours() {
    return w('getAllTours') && x.getAllTours();
  },
  getTour: function getTour(a) {
    return w('getTour') && x.getTour(a);
  },
  // toggle the guide
  showGuide: function showGuide() {
    w('showGuide') && x.showGuide();
  },
  hideGuide: function hideGuide() {
    w('hideGuide') && x.hideGuide();
  },
  // add steps
  addSteps: function addSteps(a, b) {
    w('addSteps') && x.addSteps(a, b);
  },
  newTour: function newTour(a, b) {
    w('newTour') && x.newTour(a, b);
  },
  // control the steps
  next: function next(a) {
    w('next') && x.next(a);
  },
  prev: function prev(a) {
    w('prev') && x.prev(a);
  },
  close: function close() {
    w('close') && x.close();
  },
  open: function open(a) {
    w('close') && x.open(a);
  }
};
var _default = animatour;
exports["default"] = _default;