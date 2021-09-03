"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getLocation = function _getLocation(selector, margin) {
  var LOC = {};
  var marg = margin ? margin : 0;
  var EL;

  if (selector !== '' && typeof selector !== 'null') {
    EL = document.querySelector(selector) || null;
  } //? is the current element is out of scroll range:
  //> get the current visible area of the page (from top to bottom of vp)
  //> check if the element is within this range (plus 'scroll padding' value - to make sure element isnt touching edge of vp)
  //> find the nearest scrollable parent of the target element and scroll to that target elements location plus the 'scroll padding' value


  if (EL != null) {
    var EL_RECT = EL.getBoundingClientRect();
    var SCROLL_TOP = window.pageYOffset || (document.EL || document.body.parentNode || document.body).scrollTop;
    LOC.exist = true;
    LOC.L = Math.floor(EL_RECT.left - marg);
    LOC.T = Math.floor(EL_RECT.top + SCROLL_TOP - marg);
    LOC.H = Math.floor(EL_RECT.height + marg * 2);
    LOC.W = Math.floor(EL_RECT.width + marg * 2);
  } else {
    LOC.exist = false;

    if (window) {
      LOC.H = 0;
      LOC.W = 0;
      LOC.T = Math.floor(window.innerHeight / 2);
      LOC.L = Math.floor(window.innerWidth / 2);
    }
  }

  return LOC;
};

var _default = _getLocation;
exports["default"] = _default;