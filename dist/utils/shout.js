"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.shout = void 0;
var shout = {
  warn: function warn(msg) {
    console.warn("%cAnimatour - WARNING\n", "color:yellow;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold", Array.isArray(msg) ? msg.join('\n') : msg);
  },
  error: function error(msg) {
    console.error("%cAnimatour - ERROR\n", "color:red;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold", Array.isArray(msg) ? msg.join('\n') : msg);
  },
  success: function success(msg) {
    console.log("%cAnimatour - SUCCESS\n", "color:green;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold", '%c' + _Array.isArray(msg) ? msg.join('\n') : msg, "color:green");
  },
  log: function log(msg) {
    console.log('%c' + _Array.isArray(msg) ? msg.join('\n') : msg, "color:blue");
  }
};
exports.shout = shout;
var _default = shout;
exports["default"] = _default;