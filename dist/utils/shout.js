"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var alert = function alert(type, msg) {
  switch (type) {
    case 'error':
      console.warn("%cAnimatour - ".concat(type.toUpperCase(), "\n"), "color:yellow;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold", msg || type);
      break;

    case 'success':
      console.log("%cAnimatour - ".concat(type.toUpperCase(), "\n"), "color:green;font-family:Verdana, sans-serif;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold", msg || type);
      break;

    default:
      console.log(msg);
  }
};

var _default = alert;
exports["default"] = _default;