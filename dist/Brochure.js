"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _animatour = _interopRequireDefault(require("./animatour"));

var _shout = _interopRequireDefault(require("./utils/shout"));

var _getLocation2 = _interopRequireDefault(require("./utils/getLocation"));

var _createSteps2 = _interopRequireDefault(require("./utils/createSteps"));

var _originalDefaults2 = _interopRequireDefault(require("./utils/originalDefaults"));

var _scrollToElement2 = _interopRequireDefault(require("./utils/scrollToElement"));

var _Collection = _interopRequireDefault(require("./ui/Collection"));

var _Tour = _interopRequireDefault(require("./classes/Tour"));

var _DataList = _interopRequireDefault(require("./ui/DataList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      /// default
      defaultSettings: _originalDefaults2["default"],
      /// global scoped state
      requestRef: /*#__PURE__*/_react["default"].createRef(),
      apHandle: /*#__PURE__*/_react["default"].createRef(),
      apValue: 0,
      apActive: false,
      perf: 'X',
      debug: true,
      mainProps: props,
      modal: null,
      activeTour: false,
      activeStepData: false,
      guideOpen: false,
      location: false,
      list: []
    };
    _this.updateLocation = _this.updateLocation.bind(_assertThisInitialized(_this));
    return _this;
  } //= Utilities
  //= ======================================================================================================================================
  //----------------------------------------------------------------------------------------------------------------------------------------


  _createClass(Main, [{
    key: "useTourOrActive",
    value: function useTourOrActive(tourId) {
      /// if tour exists
      if (tourId) {
        if (!this.state.list.find(function (x) {
          return x.id === tourId;
        })) {
          // shout.warn(`useTourOrActive() | No tour was found as '${tourId}'. Using currently active tour instead`)
          if (this.state.activeTour) {
            return this.state.activeTour;
          } else {// shout.warn(`useTourOrActive() | No tour was found as '${tourId}' and no active tour to use`)
          }
        } else {
          return tourId;
        }
      } /// no tour was found
      else {
        if (this.state.activeTour) {
          // shout.warn(`useTourOrActive() | No tour was supplied. Using currently active tour instead`)
          return this.state.activeTour;
        } else {
          // shout.error(`useTourOrActive() | No tour was found and no active tour to use!`)
          return false;
        }
      }
    } //----------------------------------------------------------------------------------------------------------------------------------------

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
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "enableAutoProgression",
    value: function enableAutoProgression() {
      var _this2 = this;

      clearTimeout(this.state.apHandle);
      this.setState({
        apActive: true
      });
      var ASD = this.state.activeStepData;
      var APTI = this.state.defaultSettings.autoProgressionTimingIncrement;
      console.log("EAP | stepDuration: ".concat(ASD.stepDuration, ", apValue: ").concat(this.state.apValue));

      var updateApValue = function updateApValue() {
        clearTimeout(_this2.state.apHandle);
        _this2.state.apHandle = setTimeout(function () {
          if (_this2.state.apValue < APTI) {
            _this2.setState({
              apValue: 0
            });

            _this2.next();
          } else {
            _this2.setState({
              apValue: _this2.state.apValue - APTI
            }, function () {
              return updateApValue();
            });
          }
        }, APTI);
      };

      if (ASD && ASD.stepDuration !== 0) {
        if (this.state.apValue === 0) {
          this.setState({
            apValue: ASD.stepDuration
          }, function () {
            return updateApValue();
          });
        } else {
          updateApValue();
        }
      }
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "disableAutoProgression",
    value: function disableAutoProgression() {
      clearTimeout(this.state.apHandle);
      this.setState({
        apActive: false
      }); // this.state.apValue = 0
    } //----------------------------------------------------------------------------------------------------------------------------------------

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
          _findStep11;

      var D = {};

      if (!this.state.activeTour || this.state.activeTour == false || this.state.activeTour == null || this.state.activeTour === '' || !this.useTourOrActive()) {
        // console.log('getStepData() | active tour is false or null! (1)')
        return false;
      }

      D.tour = this.state.activeTour; // console.log(`getStepData() | active tour: ${D.tour}`)

      D.totalSteps = ((_this$state$list$find = this.state.list.find(function (x) {
        return x.id === D.tour;
      })) === null || _this$state$list$find === void 0 ? void 0 : (_this$state$list$find2 = _this$state$list$find.steps) === null || _this$state$list$find2 === void 0 ? void 0 : _this$state$list$find2.length) - 1 || 0; /// if step is not specified - find the current step

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
      D.margin = ((_findStep2 = findStep(D.tour, D.step)) === null || _findStep2 === void 0 ? void 0 : _findStep2.margin) || this.state.defaultSettings.ringMargin;
      D.ringColor = ((_findStep3 = findStep(D.tour, D.step)) === null || _findStep3 === void 0 ? void 0 : _findStep3.ringColor) || this.state.defaultSettings.ringColor;
      D.ringWidth = ((_findStep4 = findStep(D.tour, D.step)) === null || _findStep4 === void 0 ? void 0 : _findStep4.ringWidth) || this.state.defaultSettings.ringWidth;
      D.closeLabel = ((_findStep5 = findStep(D.tour, D.step)) === null || _findStep5 === void 0 ? void 0 : _findStep5.closeLabel) || this.state.defaultSettings.closeLabel;
      D.nextLabel = ((_findStep6 = findStep(D.tour, D.step)) === null || _findStep6 === void 0 ? void 0 : _findStep6.nextLabel) || this.state.defaultSettings.nextLabel;
      D.prevLabel = ((_findStep7 = findStep(D.tour, D.step)) === null || _findStep7 === void 0 ? void 0 : _findStep7.prevLabel) || this.state.defaultSettings.prevLabel;
      D.stepDuration = ((_findStep8 = findStep(D.tour, D.step)) === null || _findStep8 === void 0 ? void 0 : _findStep8.stepDuration) || this.state.defaultSettings.stepDuration;
      D.transitionDuration = ((_findStep9 = findStep(D.tour, D.step)) === null || _findStep9 === void 0 ? void 0 : _findStep9.transitionDuration) || this.state.defaultSettings.transitionDuration;
      D.title = ((_findStep10 = findStep(D.tour, D.step)) === null || _findStep10 === void 0 ? void 0 : _findStep10.title) || "Step ".concat(D.step);
      D.content = ((_findStep11 = findStep(D.tour, D.step)) === null || _findStep11 === void 0 ? void 0 : _findStep11.content) || "";
      return D;
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "updateLocation",
    value: function updateLocation() {
      var t0 = performance.now();
      this.setState({
        location: (0, _getLocation2["default"])(this.getStepData(), this.state.guideOpen, this.state.defaultLocation, this.state.exitLocation)
      });
      var t1 = performance.now();
      this.setState({
        perf: t1 - t0
      });

      if (this.state.guideOpen) {
        this.state.requestRef.current = requestAnimationFrame(this.updateLocation);
      } else {
        this.setState({
          perf: 'X'
        });
        cancelAnimationFrame(this.state.requestRef.current);
      }
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.setState({
        activeStepData: this.getStepData(),
        location: (0, _getLocation2["default"])(null, this.state.guideOpen, this.state.defaultLocation, this.state.exitLocation)
      }, function () {
        return console.log('INIT', _this4.state);
      });
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "run",
    value: function run() {
      var _this5 = this;

      console.log("RUN");
      this.setState({
        guideOpen: true,
        activeTour: this.useTourOrActive(),
        activeStepData: this.getStepData()
      }, function () {
        (0, _scrollToElement2["default"])(_this5.activeStepData && _this5.activeStepData.element);

        _this5.enableAutoProgression();

        _this5.setState(function (prevState) {
          prevState.apValue = _this5.state.activeStepData.stepDuration;
          prevState.modal = _this5.state.list.find(function (x) {
            return x.id === _this5.state.activeTour;
          }).modal;
          return prevState;
        });

        _this5.state.requestRef.current = requestAnimationFrame(_this5.updateLocation);
      });
    } //= Tours
    //= ======================================================================================================================================
    //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "newTour",
    value: function newTour(tourId, config) {
      if (this.verifyTourExists(tourId)) {
        _shout["default"].error("newTour() \n A tour with the id '".concat(tourId, "' already exists"));

        return false;
      }

      var LIST = this.state.list; // create a new Tour and push to list => requires tour id, tour config and current state

      LIST.push(new _Tour["default"](tourId, config, this.state));
      this.setState({
        list: LIST,
        activeTour: tourId
      }); // console.log(`tour added: ${tourId}`, LIST)
      // console.log(`tour modal:`, config.modal)
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "getAllTours",
    value: function getAllTours() {
      return this.state.list;
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "getTour",
    value: function getTour(tourId) {
      var useTour = this.useTourOrActive(tourId);
      var TOUR = this.state.list.find(function (x) {
        return x.id === useTour;
      });

      if (!TOUR) {
        _shout["default"].error("No tour found for '".concat(useTour, "'"));
      } else {
        console.log("getTour(".concat(useTour, ")"));
        return TOUR;
      }
    } //= Steps 
    //= ======================================================================================================================================
    //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "addSteps",
    value: function addSteps(tourId, newSteps) {
      console.log("ADD STEPS ".concat(tourId));
      STEPS = (0, _createSteps2["default"])(newSteps, this.state.list.find(function (x) {
        return x.id === tourId;
      }).steps);
      this.setState(function (prevState) {
        return prevState.list.find(function (x) {
          return x.id === tourId;
        }).steps = STEPS;
      });
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "next",
    value: function next(tourId) {
      console.log("NEXT ".concat(tourId));
      var useTour = this.useTourOrActive(tourId);

      if (!useTour) {
        _shout["default"].error("next() | Unable to advance a tour to the next step without an active tour available.", "Set an active tour with animatour.start('My Tour')");

        return false;
      }

      var STEP = this.state.list.find(function (x) {
        return x.id === useTour;
      }).currentStep;
      var LENGTH = this.state.list.find(function (x) {
        return x.id === useTour;
      }).steps.length - 1;

      if (STEP < LENGTH) {
        STEP = STEP + 1;
      } else {
        STEP = 0;
      }

      var ELEMENT = this.state.list.find(function (x) {
        return x.id === useTour;
      }).steps[STEP].element;
      (0, _scrollToElement2["default"])(ELEMENT);
      var ASD = this.getStepData(STEP);
      console.log("Brochure | next() - transitionDuration: ".concat(ASD.transitionDuration)); // console.log('ASD + location', ASD, this.state.location)

      if (this.state.defaultSettings.enableAutoProgressionOnNext) {
        this.enableAutoProgression();
      } else {
        this.disableAutoProgression();
      }

      this.setState(function (prevState) {
        prevState.list.find(function (x) {
          return x.id === useTour;
        }).currentStep = STEP;
        prevState.activeStepData = ASD;
        prevState.apValue = ASD.stepDuration || 0;
        return prevState;
      });
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "prev",
    value: function prev(tourId) {
      console.log("PREV ".concat(tourId));
      var useTour = this.useTourOrActive(tourId);

      if (!useTour) {
        _shout["default"].error("prev() | Unable to advance a tour to the previous step without an active tour available.", "Set an active tour with animatour.start('My Tour')");

        return false;
      }

      var STEP = this.state.list.find(function (x) {
        return x.id === useTour;
      }).currentStep;
      var LENGTH = this.state.list.find(function (x) {
        return x.id === useTour;
      }).steps.length - 1;

      if (STEP >= 1) {
        STEP = STEP - 1;
      } else {
        STEP = LENGTH;
      }

      var ELEMENT = this.state.list.find(function (x) {
        return x.id === useTour;
      }).steps[STEP].element; // console.log(`prev | step: ${STEP}`)

      var ASD = this.getStepData(STEP); // console.log('ASD + location', ASD, this.state.location)

      if (this.state.defaultSettings.enableAutoProgressionOnPrev) {
        this.enableAutoProgression(ASD);
      } else {
        this.disableAutoProgression();
      }

      this.setState(function (prevState) {
        prevState.list.find(function (x) {
          return x.id === useTour;
        }).currentStep = STEP;
        prevState.activeStepData = ASD;
        prevState.apValue = ASD.stepDuration || 0; /// prevState.guideLocation = this._findGuide(ELEMENT)

        return prevState;
      });
      (0, _scrollToElement2["default"])(ELEMENT);
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "reset",
    value: function reset(tourId) {
      var _this6 = this;

      console.log("RESET ".concat(tourId));
      var useTour = this.useTourOrActive(tourId);
      console.log("reset | tour: ".concat(tourId, " - ").concat(useTour));

      if (!useTour) {
        _shout["default"].error("Unable to reset a tour without starting a tour first. Tours will automatically start from step 0 unless 'currentStep' is set at tour creation.");

        return false;
      }

      var ELEMENT = this.state.list.find(function (x) {
        return x.id === useTour;
      }).steps[this.state.list.find(function (x) {
        return x.id === useTour;
      }).currentStep].element;
      this.setState(function (prevState) {
        prevState.list.find(function (x) {
          return x.id === useTour;
        }).currentStep = 0;
        prevState.activeStepData = _this6.getStepData();
        return prevState;
      });
      (0, _scrollToElement2["default"])(ELEMENT);
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "start",
    value: function start(tourId) {
      var _this7 = this;

      console.log("START ".concat(tourId));
      var useTour = this.useTourOrActive(tourId); //  const setActiveStepData = () => {
      //    let ASD = 'not defined yet'
      //    ASD = this.getStepData()
      //    _scrollToElement(ASD.element)
      //   //  this.updateLocation()
      //   this.run()
      //  }

      if (!useTour) {
        _shout["default"].error('Not able to start a tour - starting a tour first.', 'Use animatour.start("My Tour") to start a tour and open the guide)');

        return false;
      } else {
        this.setState({
          activeTour: useTour
        }, function () {
          return _this7.run();
        });
      }
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "play",
    value: function play() {
      console.log('PLAY');
      this.enableAutoProgression();
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "pause",
    value: function pause() {
      console.log('PAUSE');
      this.disableAutoProgression();
    } //= Brochure 
    //= ======================================================================================================================================
    //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "open",
    value: function open() {
      console.log('OPEN');
      this.run(); // used as callback for setState function
      // let useTour = this.useTourOrActive()
      // // console.log(`open('${useTour}')`)
      // if(!useTour){
      //   shout.error('Not able to open guide without starting a tour first.','Use animatour.start("My Tour") to start a tour and open the guide)')
      //   return false
      // }
      // const setActiveStepData = () => {
      //   let ASD = 'not defined yet'
      //   ASD = this.getStepData()
      //   // console.log(`open(id:${tourId}, useTour:${useTour}) - ASD`, ASD) 
      //   this.setState({ activeStepData: ASD })
      //   // this.init()
      //   // console.log(`active tour: ${this.state.activeTour}`)
      // }
      // if(useTour){
      //   this.setState({guideOpen: true, activeTour: useTour}, () => setActiveStepData())
      // }
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "close",
    value: function close() {
      console.log('CLOSE');
      this.setState({
        guideOpen: false
      });
      this.disableAutoProgression();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.state.requestRef.current);
    }
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
      }, this.state.perf), /*#__PURE__*/_react["default"].createElement(_DataList["default"], {
        data: this.state
      }), /*#__PURE__*/_react["default"].createElement(_Collection["default"], {
        state: this.state
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