"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _animatour = _interopRequireDefault(require("./animatour"));

var B = _interopRequireWildcard(require("./brochure"));

var _createSteps = _interopRequireDefault(require("./utils/createSteps"));

var _Tour = _interopRequireDefault(require("./utils/Tour"));

var _shout = _interopRequireDefault(require("./utils/shout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      mainProps: props,
      list: [{
        id: 'Default Tour',
        currentStep: 0,
        steps: [{
          title: 'STEP 0',
          element: '.step-0-element',
          content: 'Step Zero Content'
        }, {
          title: 'STEP 1',
          element: '.step-1-element',
          content: 'Step One Content'
        }, {
          title: 'STEP 2',
          element: '.step-2-element',
          content: 'Step Two Content'
        }]
      }, {
        id: 'Tour Two',
        currentStep: 0,
        steps: [{
          title: 'STEP 0',
          element: '.step-0-element',
          content: 'Step Zero Content'
        }, {
          title: 'STEP 1',
          element: '.step-1-element',
          content: 'Step One Content'
        }, {
          title: 'STEP 2',
          element: '.step-2-element',
          content: 'Step Two Content'
        }]
      }]
    };
    return _this;
  }

  _createClass(Main, [{
    key: "newTour",
    value: function newTour(tourId, config) {
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var LIST = this.state.list.push(new _Tour["default"](tourId, config));
      this.setState({
        list: LIST
      });
    }
  }, {
    key: "addSteps",
    value: function addSteps(tourId, newSteps) {
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      STEPS = (0, _createSteps["default"])(newSteps, this.state.list.find(function (x) {
        return x.id === tourId;
      }).steps);
      this.setState(function (prevState) {
        return prevState.list.find(function (x) {
          return x.id === tourId;
        }).steps = STEPS;
      });
    }
  }, {
    key: "getSteps",
    value: function getSteps(tourId) {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var STEPS = this.state.list.find(function (x) {
        return x.id === tourId;
      }).steps;

      if (!STEPS) {
        (0, _shout["default"])('error', "No steps found for '".concat(tourId, "'"));
      } else {
        return STEPS;
      }
    }
  }, {
    key: "next",
    value: function next(tourId) {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (!tourId) {
        (0, _shout["default"])('error', "Must specify a tour when calling nextStep()");
        return false;
      }

      var STEP = this.state.list.find(function (x) {
        return x.id === tourId;
      }).currentStep;
      var LENGTH = this.state.list.find(function (x) {
        return x.id === tourId;
      }).steps.length - 1;

      if (STEP < LENGTH) {
        STEP = STEP + 1;
      } else {
        STEP = 0;
      }

      this.setState(function (prevState) {
        return prevState.list.find(function (x) {
          return x.id === tourId;
        }).currentStep = STEP;
      });
      console.log("".concat(tourId, " - ").concat(this.state.list.find(function (x) {
        return x.id === tourId;
      }).currentStep));
    }
  }, {
    key: "prev",
    value: function prev(tourId) {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (!tourId) {
        (0, _shout["default"])('error', "Must specify a tour when calling prevStep()");
        return false;
      } else {
        console.log("tour: ".concat(tourId, " - prev"));
      }

      var STEP = this.state.list.find(function (x) {
        return x.id === tourId;
      }).currentStep;
      var LENGTH = this.state.list.find(function (x) {
        return x.id === tourId;
      }).steps.length - 1;

      if (STEP > 0) {
        STEP = STEP - 1;
      } else {
        STEP = LENGTH;
      }

      this.setState(function (prevState) {
        return prevState.list.find(function (x) {
          return x.id === tourId;
        }).currentStep = STEP;
      });
    }
  }, {
    key: "exit",
    value: function exit(tourId) {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var tour = this.list.find(function (x) {
        return x.id === tourId;
      });
      this.setState({
        step: this.state.step + 1
      });
      console.log("next step! ".concat(this.state.step));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    } // Rest of the component's code

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(B.B1, {
        tour: this.state.list.find(function (x) {
          return x.id === _this2.state.mainProps.tour;
        })
      }); // switch(this.state.brochureType){
      //   case 1: return <B.B1 {...this.state} {...this.state.mainProps}/>;
      //   default: return <B.B2 {...this.state} {...this.state.mainProps}/>;
      // }
    }
  }]);

  return Main;
}(_react["default"].Component);

;

var Brochure = function Brochure(props) {
  return /*#__PURE__*/_react["default"].createElement(Main, _extends({
    ref: function ref(component) {
      return window.main = component;
    }
  }, props));
};

var _default = Brochure;
exports["default"] = _default;