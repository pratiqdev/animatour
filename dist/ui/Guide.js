"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Guide = function Guide(_ref) {
  var LOC = _ref.LOC;
  // LOC.exist && console.log(LOC)
  var REF_HALO = (0, _react.useRef)();

  if (!LOC) {
    return false;
  } else {// console.log(`Guide | move to:`, LOC) //> check LOCation
  } // useEffect(()=>{
  //   console.log(`HALO | lo`)
  //     let tl = gsap.timeline({repeat: -1, repeatDelay: 0});
  //     tl.to([REF_HALO.current], { duration: 1, repeat: -1,  outlineOffset: '0px', ease: 'Power1.easeInOut'})
  //     setTimeout(() => {
  //       tl.pause()
  //     }, 1000);
  //     return () => tl.pause()
  // }, [LOC.l, LOC.t])


  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: REF_HALO,
    onClick: function onClick(e) {
      e.preventDefault(), e.stopPropagation();
    },
    style: {
      position: "absolute",
      display: 'block',
      zIndex: 10000,
      borderRadius: ".5rem",
      opacity: LOC.E ? "1" : "0",
      border: "1px solid",
      borderColor: "red",
      width: "".concat(LOC.W, "px"),
      height: "".concat(LOC.H, "px"),
      top: "".concat(LOC.T, "px"),
      left: "".concat(LOC.L, "px"),
      // boxShadow: `0 0 10000px 10000px grey`,
      transition: "all .5s, opacity .2s",
      // outline: '3px solid',
      // outlineOffset: '100px',
      // outlineColor: 'primary_b',
      // transition: '.5s'
      pointerEvents: 'none'
    }
  });
};

var _default = Guide;
exports["default"] = _default;