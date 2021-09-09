"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _animatour = _interopRequireDefault(require("./animatour"));

var _Collection = _interopRequireDefault(require("./ui/Collection"));

var _Tour = _interopRequireDefault(require("./classes/Tour"));

var _shout = _interopRequireDefault(require("./utils/shout"));

var _getLocation2 = _interopRequireDefault(require("./utils/getLocation"));

var _scrollToElement2 = _interopRequireDefault(require("./utils/scrollToElement"));

var _createSteps2 = _interopRequireDefault(require("./utils/createSteps"));

var _DataList = _interopRequireDefault(require("./ui/DataList"));

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

var ogDefaultSettings = {
  ringColor: '#f00',
  ringWidth: '1px',
  ringRadius: '0px',
  ringMargin: '10px',
  ringShadowColor: 'rgba(150,150,150,.8)',
  ringShadowWidth: '10000px',
  brochureType: 0,
  //? 'flat', 'simple', 'custom' ???
  stepDuration: 0,
  /// (ms) 0 means do not auto progress to next step 
  exitLabel: 'Exit',
  nextLabel: '>',
  prevLabel: '<',
  duration: '.8s' /// time it takes to move the ring

};

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      perf: 0,
      defaultSettings: {
        ringColor: '#f00',
        ringWidth: '1px',
        ringRadius: '0px',
        ringMargin: '10px',
        ringShadowColor: 'rgba(150,150,150,.8)',
        ringShadowWidth: '10000px',
        brochureType: 0,
        stepDuration: 0,
        exitLabel: 'Exit',
        nextLabel: '>',
        prevLabel: '<',
        duration: .8
      },
      mainProps: props,
      activeTour: false,
      activeStepData: false,
      guideOpen: false,
      location: false,
      brochureAlignment: ['top-left', 'left-top'],
      list: []
    };
    return _this;
  } //- Utilities ----------------------------------------------------------------------------------------------------------------------------


  _createClass(Main, [{
    key: "useTourOrActive",
    value: function useTourOrActive(tourId) {
      if (tourId) {
        if (!this.state.list.find(function (x) {
          return x.id === tourId;
        })) {
          _shout["default"].warn("useTourOrActive() | No tour was found as '".concat(tourId, "'. Using currently active tour instead"));

          if (this.state.activeTour) {
            return this.state.activeTour;
          } else {
            _shout["default"].warn("useTourOrActive() | No tour was found as '".concat(tourId, "' and no active tour to use"));
          }
        } else {
          return tourId;
        }
      } else {
        return this.state.activeTour;
      }
    }
  }, {
    key: "verifyTourExists",
    value: function verifyTourExists(tourId) {
      if (tourId) {
        if (typeof this.state.list.find(function (x) {
          return x.id === tourId;
        }) === 'undefined') {
          _shout["default"].warn("verifyTourExists() | No tour was found as '".concat(tourId, "'"));

          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } //- Tours --------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "newTour",
    value: function newTour(tourId, config) {
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (this.verifyTourExists(tourId)) {
        _shout["default"].error("newTour() \n A tour with the id '".concat(tourId, "' already exists"));

        return false;
      }

      var LIST = this.state.list;
      LIST.push(new _Tour["default"](tourId, config));
      this.setState({
        list: LIST
      });
      console.log("tour added: ".concat(tourId), LIST);
    }
  }, {
    key: "getAllTours",
    value: function getAllTours() {
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      return this.state.list;
    }
  }, {
    key: "getTour",
    value: function getTour(tourId) {
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var useTour = this.useTourOrActive(tourId);
      var TOUR = this.state.list.find(function (x) {
        return x.id === useTour;
      });

      if (!TOUR) {
        _shout["default"].error("No tour found for '".concat(useTour, "'"));
      } else {
        return TOUR;
      }
    } //- Steps --------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "addSteps",
    value: function addSteps(tourId, newSteps) {
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      STEPS = (0, _createSteps2["default"])(newSteps, this.state.list.find(function (x) {
        return x.id === tourId;
      }).steps);
      this.setState(function (prevState) {
        return prevState.list.find(function (x) {
          return x.id === tourId;
        }).steps = STEPS;
      });
    }
  }, {
    key: "next",
    value: function next(tourId) {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var TOUR = this.useTourOrActive(tourId);
      var STEP = this.state.list.find(function (x) {
        return x.id === TOUR;
      }).currentStep;
      var LENGTH = this.state.list.find(function (x) {
        return x.id === TOUR;
      }).steps.length - 1;

      if (STEP < LENGTH) {
        STEP = STEP + 1;
      } else {
        STEP = 0;
      }

      var ELEMENT = this.state.list.find(function (x) {
        return x.id === TOUR;
      }).steps[STEP].element;
      var ASD = this.getStepData(STEP); //? This needs to check if active step is still the same as when it was called to prevent a different step from auto-progressing
      // if(ASD.stepDuration !== 0){
      //   setTimeout(() => {
      //     this.next()
      //   }, ASD.stepDuration);
      // }

      this.setState(function (prevState) {
        prevState.list.find(function (x) {
          return x.id === TOUR;
        }).currentStep = STEP;
        prevState.activeStepData = ASD; //  prevState.guideLocation = this._findGuide(ELEMENT)

        return prevState;
      });
      (0, _scrollToElement2["default"])(ELEMENT);
    }
  }, {
    key: "prev",
    value: function prev(tourId) {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var TOUR = this.useTourOrActive(tourId);
      var STEP = this.state.list.find(function (x) {
        return x.id === TOUR;
      }).currentStep;
      var LENGTH = this.state.list.find(function (x) {
        return x.id === TOUR;
      }).steps.length - 1;

      if (STEP >= 1) {
        STEP = STEP - 1;
      } else {
        STEP = LENGTH;
      }

      var ELEMENT = this.state.list.find(function (x) {
        return x.id === TOUR;
      }).steps[STEP].element;
      console.log("prev | step: ".concat(STEP));
      var ASD = this.getStepData(STEP);
      this.setState(function (prevState) {
        prevState.list.find(function (x) {
          return x.id === TOUR;
        }).currentStep = STEP;
        prevState.activeStepData = ASD; /// prevState.guideLocation = this._findGuide(ELEMENT)

        return prevState;
      });
      (0, _scrollToElement2["default"])(ELEMENT);
    } //- Brochure -----------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "open",
    value: function open(tourId) {
      var _this2 = this;

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var useTour = this.useTourOrActive(tourId);
      console.log("open('".concat(useTour, "')")); /// used as callback for setState function

      var setActiveStepData = function setActiveStepData() {
        var ASD = _this2.getStepData();

        console.log('open() - ASD', ASD);

        _this2.setState({
          activeStepData: ASD
        });
      };

      this.setState({
        guideOpen: true,
        activeTour: useTour
      }, function () {
        return setActiveStepData();
      });
    }
  }, {
    key: "close",
    value: function close() {
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      this.setState({
        guideOpen: false
      });
    } //- Guide --------------------------------------------------------------------------------------------------------------------------------

    /** Get all data for active or given step
     * 
     * ***
     * this function handles setting a state object that contains all given step data or defaults if not provided.
     */

  }, {
    key: "getStepData",
    value: function getStepData(STEP) {
      var _this$state$list$find,
          _this$state$list$find2,
          _this3 = this,
          _findStep,
          _findStep2,
          _findStep3,
          _findStep4,
          _findStep5,
          _findStep6,
          _findStep7,
          _findStep8,
          _findStep9,
          _findStep10,
          _findStep11,
          _findStep12;

      var D = {};

      if (this.state.activeTour == false || this.state.activeTour == null || this.state.activeTour === '') {
        // console.log(`getStepData() | no active tour found`)
        return false;
      }

      D.tour = this.state.activeTour;
      D.totalSteps = ((_this$state$list$find = this.state.list.find(function (x) {
        return x.id === D.tour;
      })) === null || _this$state$list$find === void 0 ? void 0 : (_this$state$list$find2 = _this$state$list$find.steps) === null || _this$state$list$find2 === void 0 ? void 0 : _this$state$list$find2.length) || 0; /// if step is not specified - find the current step

      if (typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps) {
        D.step = STEP;
      } else {
        D.step = this.state.list.find(function (x) {
          return x.id === D.tour;
        }).currentStep;
      }

      var findStep = function findStep(t, s) {
        var _this3$state$list$fin;

        return (_this3$state$list$fin = _this3.state.list.find(function (x) {
          return x.id === t;
        })) === null || _this3$state$list$fin === void 0 ? void 0 : _this3$state$list$fin.steps[s];
      };

      D.element = (_findStep = findStep(D.tour, D.step)) === null || _findStep === void 0 ? void 0 : _findStep.element;
      D.margin = ((_findStep2 = findStep(D.tour, D.step)) === null || _findStep2 === void 0 ? void 0 : _findStep2.margin) || this.state.defaultSettings.guideMargin;
      D.ringColor = ((_findStep3 = findStep(D.tour, D.step)) === null || _findStep3 === void 0 ? void 0 : _findStep3.ringColor) || this.state.defaultSettings.ringColor;
      D.ringWidth = ((_findStep4 = findStep(D.tour, D.step)) === null || _findStep4 === void 0 ? void 0 : _findStep4.ringWidth) || this.state.defaultSettings.ringWidth;
      D.exitLabel = ((_findStep5 = findStep(D.tour, D.step)) === null || _findStep5 === void 0 ? void 0 : _findStep5.exitLabel) || this.state.defaultSettings.exitLabel;
      D.nextLabel = ((_findStep6 = findStep(D.tour, D.step)) === null || _findStep6 === void 0 ? void 0 : _findStep6.nextLabel) || this.state.defaultSettings.nextLabel;
      D.prevLabel = ((_findStep7 = findStep(D.tour, D.step)) === null || _findStep7 === void 0 ? void 0 : _findStep7.prevLabel) || this.state.defaultSettings.prevLabel;
      D.brochureType = ((_findStep8 = findStep(D.tour, D.step)) === null || _findStep8 === void 0 ? void 0 : _findStep8.brochureType) || this.state.defaultSettings.brochureType;
      D.stepDuration = ((_findStep9 = findStep(D.tour, D.step)) === null || _findStep9 === void 0 ? void 0 : _findStep9.stepDuration) || this.state.defaultSettings.stepDuration;
      D.duration = ((_findStep10 = findStep(D.tour, D.step)) === null || _findStep10 === void 0 ? void 0 : _findStep10.duration) || this.state.defaultSettings.duration;
      D.title = ((_findStep11 = findStep(D.tour, D.step)) === null || _findStep11 === void 0 ? void 0 : _findStep11.title) || "Step ".concat(D.step);
      D.content = ((_findStep12 = findStep(D.tour, D.step)) === null || _findStep12 === void 0 ? void 0 : _findStep12.content) || "";
      return D;
    }
  }, {
    key: "setGuideOrigin",
    value: function setGuideOrigin() {
      // let SCROLL_TOP = 0 
      // let WINDOW_W = 0
      // let WINDOW_H = 0
      // if(window){
      //   SCROLL_TOP = window.pageYOffset || (document.EL || document.body.parentNode || document.body).scrollTop
      //   WINDOW_W = Math.floor(window.innerWidth)
      //   WINDOW_H = Math.floor(window.innerHeight)
      //   this.setState({location: {
      //     E: false,
      //     H: 0,
      //     W: 0, 
      //     T: Math.floor((window.innerHeight / 2) + SCROLL_TOP),
      //     L: Math.floor(window.innerWidth / 2),
      //     S: SCROLL_TOP,
      //     WW: WINDOW_W,
      //     WH: WINDOW_H,
      //   }})
      // }
      this.setState({
        location: {
          E: true,
          H: 0,
          W: 0,
          T: 5000,
          L: 5000,
          S: 0,
          WW: 0,
          WH: 0
        }
      });
    }
  }, {
    key: "repeatUpdateGuideLocation",
    value: function repeatUpdateGuideLocation() {
      var _this4 = this;

      var newD = {};
      var ASD = null;

      var loop = function loop() {
        var t0 = performance.now();
        ASD = _this4.getStepData();

        if (ASD) {
          newD = (0, _getLocation2["default"])(ASD);

          _this4.setState(function (prevState) {
            prevState.location = newD;
            return prevState;
          });
        }

        setTimeout(function () {
          var t1 = performance.now();

          _this4.setState({
            perf: t1 - t0
          });

          loop();
        }, 10);
      };

      loop();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setGuideOrigin();
      this.repeatUpdateGuideLocation();
      this.setState({
        activeStepData: this.getStepData()
      });
    } // Rest of the component's code

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'fixed',
          top: '0',
          left: '0',
          background: '#9f9',
          padding: '5px',
          width: '2rem',
          zIndex: '9999999'
        }
      }, this.state.perf), /*#__PURE__*/_react["default"].createElement(_Collection["default"], {
        data: this.state.activeStepData,
        open: this.state.guideOpen,
        loc: this.state.location
      }));
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