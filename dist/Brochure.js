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
  prevLabel: '<'
};

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
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
        prevLabel: '<'
      },
      mainProps: props,
      activeTour: 'Default Tour',
      activeStepData: {},
      guideOpen: false,
      location: null,
      brochureAlignment: ['top-left', 'left-top'],
      list: [{
        id: 'Default Tour',
        currentStep: 0,
        brochureType: 1,
        steps: [{
          title: 'START',
          element: '',
          content: 'start page - no element (index 0)',
          stepDuration: 1000
        }, {
          title: 'STEP 1',
          element: '.step-1-element',
          content: 'Step One content (index 1)',
          margin: 0,
          ringColor: '#ffa',
          stepDuration: 1000
        }, {
          title: 'STEP 2',
          element: '.step-2-element',
          content: 'Step Two Content (index 2)',
          margin: 10,
          ringColor: 'green',
          ringWidth: '8px',
          stepDuration: 1000
        }, {
          title: 'STEP 3',
          element: '.step-3-element',
          content: 'Step Three Content (index 3)',
          margin: 20,
          ringColor: 'blue',
          stepDuration: 1000
        }, {
          title: 'STEP 4',
          element: '.step-4-element',
          content: 'Step Four Content (index 4)',
          stepDuration: 1000
        }, {
          title: 'STEP 5',
          element: '.step-5-element',
          content: 'Step Five Content (index 5)',
          ringWidth: '15px',
          stepDuration: 1000
        }, {
          title: 'STEP 6',
          element: '.step-6-element',
          content: 'Step Six Content (index 6)',
          stepDuration: 1000
        }, {
          title: 'END',
          element: '',
          content: 'end page - no element (index 4)',
          stepDuration: 1000
        }]
      }, {
        id: 'Tour Two',
        currentStep: 0,
        brochureType: 1,
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
  } //- Utilities ----------------------------------------------------------------------------------------------------------------------------


  _createClass(Main, [{
    key: "useTourOrActive",
    value: function useTourOrActive(tourId) {
      if (tourId) {
        if (this.state.list.find(function (x) {
          return x.id === tourId;
        }) === false) {
          _shout["default"].warn("No tour was found as '".concat(tourId, "'. Using currently active tour instead"));

          return this.state.activeTour;
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
          // shout.warn( `No tour was found as '${tourId}'. Using currently active tour instead`)
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
      var _this2 = this;

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

      if (ASD.stepDuration !== 0) {
        setTimeout(function () {
          _this2.next();
        }, ASD.stepDuration);
      }

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
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var useTour = this.useTourOrActive(tourId);
      this.setState({
        guideOpen: true,
        activeTour: useTour
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
      var D = {};
      D.tour = this.state.activeTour;
      D.totalSteps = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps.length; /// if step is not specified - find the current step

      if (typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps) {
        D.step = STEP;
      } else {
        D.step = this.state.list.find(function (x) {
          return x.id === D.tour;
        }).currentStep;
      }

      D.element = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].element;
      D.margin = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].margin || this.state.defaultSettings.guideMargin;
      D.ringColor = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].ringColor || this.state.defaultSettings.ringColor;
      D.ringWidth = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].ringWidth || this.state.defaultSettings.ringWidth;
      D.exitLabel = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].exitLabel || this.state.defaultSettings.exitLabel;
      D.nextLabel = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].nextLabel || this.state.defaultSettings.nextLabel;
      D.prevLabel = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].prevLabel || this.state.defaultSettings.prevLabel;
      D.brochureType = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].brochureType || this.state.defaultSettings.brochureType;
      D.stepDuration = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].stepDuration || this.state.defaultSettings.stepDuration;
      D.title = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].title || "Step ".concat(D.step);
      D.content = this.state.list.find(function (x) {
        return x.id === D.tour;
      }).steps[D.step].title || "";
      return D;
    }
  }, {
    key: "repeatUpdateGuideLocation",
    value: function repeatUpdateGuideLocation() {
      var _this3 = this;

      var newD = null;
      var ASD = null;

      var loop = function loop() {
        ASD = _this3.getStepData();
        newD = (0, _getLocation2["default"])(ASD);

        _this3.setState(function (prevState) {
          prevState.location = newD;
          return prevState;
        });

        setTimeout(function () {
          loop();
        }, 50);
      };

      loop();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.repeatUpdateGuideLocation();
      this.setState({
        activeStepData: this.getStepData()
      });
    } // Rest of the component's code

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_Collection["default"], {
        data: this.state.activeStepData,
        open: this.state.guideOpen,
        loc: this.state.location
      });
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