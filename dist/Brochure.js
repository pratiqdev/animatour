"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _animatour = _interopRequireDefault(require("./animatour"));

var _shout = _interopRequireDefault(require("./utils/shout"));

var _createSteps2 = _interopRequireDefault(require("./utils/createSteps"));

var _defaultSettings2 = _interopRequireDefault(require("./utils/defaultSettings"));

var _scrollToElement2 = _interopRequireDefault(require("./utils/scrollToElement"));

var _Collection = _interopRequireDefault(require("./ui/Collection"));

var _Tour = _interopRequireDefault(require("./classes/Tour"));

var _DataList = _interopRequireDefault(require("./ui/DataList"));

var _gsap = _interopRequireWildcard(require("gsap"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

// let numberOfRenders = 0
var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      /// default
      globalSettings: _defaultSettings2["default"],
      /// dev config vars
      // requestRef: React.createRef(), //! => collection
      // apHandle: React.createRef(), //! => collection
      mainProps: props,
      debug: 3,
      //! => Shout
      // perf: 'X', //! => Collection
      /// global vars
      // apValue: 0, //! => Collection
      // apActive: false, //! => collection
      modal: null,
      activeTour: false,
      activeStepData: false,
      guideOpen: false,
      // location: false, //! => Collection
      // timeline: new TimelineMax(), //! => Collection
      list: []
    };
    console.log('Brochure instantiated'); // this.updateLocation = this.updateLocation.bind(this); //! => Collection

    return _this;
  } //~_______________________________________________________________________ 
  //~ state variables stored here should ONLY UPDATE ON STEP CHANGE          
  //~ constantly changing variables should exist in the Collection component 
  //~_______________________________________________________________________ 
  //= Debug
  //= ======================================================================================================================================


  _createClass(Main, [{
    key: "setDebugMode",
    value: function setDebugMode(val) {
      if (typeof val === 'number' && val >= 0 && val <= 3) {
        this.setState({
          debug: val
        });
      } else {
        _shout["default"].error('Debug mode must be between 0 and 3. Debug levels:', '0 - logging disabled', '1 - important logs', '2 - important + basic logs', '3 - important + basic + any logs');
      }
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "log",
    value: function log(x) {
      if (this.state.debug >= x.d) {
        console.log('----------------------------------------');
        console.log(x.f);
        x.v && console.log('%c' + x.v, "color:blue");
      }
    } //= Startup
    //= ======================================================================================================================================

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.setState({
        activeStepData: this.getStepData() // location: _getLocation(null, this.state.guideOpen, this.state.defaultLocation, this.state.exitLocation)
        // location: this.getLocation() //! moved to Collection

      }, function () {
        return _this2.log({
          d: 1,
          f: 'init()',
          v: _this2.state
        });
      });
    } //----------------------------------------------------------------------------------------------------------------------------------------
    //  start the sequence

  }, {
    key: "run",
    value: function run() {
      var _this3 = this;

      this.log({
        d: 1,
        f: 'run()'
      }); // setup start sequence

      this.setState({
        guideOpen: true,
        activeTour: this.useTourOrActive(),
        activeStepData: this.getStepData()
      }, function () {
        // _scrollToElement(this.activeStepData && this.activeStepData.element) //! => Collection
        // this.enableAutoProgression()//! => Collection
        _this3.setState(function (prevState) {
          // prevState.apValue = this.state.activeStepData.stepDuration //! => Collection
          // pull the modal from the active tour
          prevState.modal = _this3.state.list.find(function (x) {
            return x.id === _this3.state.activeTour;
          }).modal;
          return prevState;
        }); // this.state.requestRef.current = requestAnimationFrame(this.updateLocation);//! => Collection

      });
    } //= Utilities
    //= ======================================================================================================================================

  }, {
    key: "useTourOrActive",
    value: function useTourOrActive(tourId) {
      this.log({
        d: 1,
        f: 'useTourOrActive()'
      }); /// if tour exists

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
      this.log({
        d: 1,
        f: 'verifyTourExists()',
        v: "tourId: ".concat(tourId)
      });

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
    // enableAutoProgression (){ //! => Collection
    //   clearTimeout(this.state.apHandle)
    //   this.setState({apActive: true})
    //   let ASD = this.state.activeStepData
    //   let APTI = this.state.globalSettings.autoProgressionTimingIncrement
    //     const updateApValue = () => {
    //       clearTimeout(this.state.apHandle)
    //       this.state.apHandle = setTimeout(() => {
    //         if(this.state.apValue < APTI){
    //           this.setState({apValue: 0})
    //           this.next()
    //         }else{
    //           this.setState({apValue: this.state.apValue - APTI}, ()=> updateApValue())
    //         }
    //       }, APTI);
    //     }
    //   if(ASD && ASD.stepDuration !== 0){
    //     if(this.state.apValue === 0){
    //       this.setState({apValue: ASD.stepDuration}, ()=> updateApValue())
    //     }else{
    //       updateApValue()
    //     }
    //   }
    // }
    //----------------------------------------------------------------------------------------------------------------------------------------
    // disableAutoProgression (){ //! => Collection
    //   this.log({
    //     d:1,
    //     f:'disableAutoProgression()'
    //   })
    //   clearTimeout(this.state.apHandle)
    //   this.setState({apActive: false})
    //   // this.state.apValue = 0
    // }
    //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "getStepData",
    value: function getStepData(STEP) {
      var _this$state$list$find,
          _this$state$list$find2,
          _this$state$list$find3,
          _this$state$list$find4,
          _this4 = this,
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

      this.log({
        d: 1,
        f: 'getStepData()'
      });
      var D = {};

      if (!this.useTourOrActive()) {
        // console.log('getStepData() | active tour is false or null! (1)')
        return false;
      }

      D.tour = this.state.activeTour;
      D.totalSteps = ((_this$state$list$find = this.state.list.find(function (x) {
        return x.id === D.tour;
      })) === null || _this$state$list$find === void 0 ? void 0 : (_this$state$list$find2 = _this$state$list$find.steps) === null || _this$state$list$find2 === void 0 ? void 0 : _this$state$list$find2.length) === 0 ? 0 : ((_this$state$list$find3 = this.state.list.find(function (x) {
        return x.id === D.tour;
      })) === null || _this$state$list$find3 === void 0 ? void 0 : (_this$state$list$find4 = _this$state$list$find3.steps) === null || _this$state$list$find4 === void 0 ? void 0 : _this$state$list$find4.length) - 1; /// if step is not specified - find the current step

      if (typeof STEP === 'number' && STEP >= 0 && STEP <= D.totalSteps) {
        D.step = STEP;
      } else {
        var _this$state$list$find5;

        D.step = (_this$state$list$find5 = this.state.list.find(function (x) {
          return x.id === D.tour;
        }).currentStep) !== null && _this$state$list$find5 !== void 0 ? _this$state$list$find5 : 0;
      }

      var findStep = function findStep(t, s) {
        var _this4$state$list$fin;

        return (_this4$state$list$fin = _this4.state.list.find(function (x) {
          return x.id === t;
        })) === null || _this4$state$list$fin === void 0 ? void 0 : _this4$state$list$fin.steps[s];
      };

      D.element = (_findStep = findStep(D.tour, D.step)) === null || _findStep === void 0 ? void 0 : _findStep.element;
      D.ringMargin = (_findStep2 = findStep(D.tour, D.step)) === null || _findStep2 === void 0 ? void 0 : _findStep2.ringMargin; //|| this.state.globalSettings.ringMargin

      D.ringColor = (_findStep3 = findStep(D.tour, D.step)) === null || _findStep3 === void 0 ? void 0 : _findStep3.ringColor; //|| this.state.globalSettings.ringColor

      D.ringWidth = (_findStep4 = findStep(D.tour, D.step)) === null || _findStep4 === void 0 ? void 0 : _findStep4.ringWidth; //|| this.state.globalSettings.ringWidth

      D.closeLabel = (_findStep5 = findStep(D.tour, D.step)) === null || _findStep5 === void 0 ? void 0 : _findStep5.closeLabel; //|| this.state.globalSettings.closeLabel

      D.nextLabel = (_findStep6 = findStep(D.tour, D.step)) === null || _findStep6 === void 0 ? void 0 : _findStep6.nextLabel; //|| this.state.globalSettings.nextLabel

      D.prevLabel = (_findStep7 = findStep(D.tour, D.step)) === null || _findStep7 === void 0 ? void 0 : _findStep7.prevLabel; //|| this.state.globalSettings.prevLabel

      D.stepDuration = (_findStep8 = findStep(D.tour, D.step)) === null || _findStep8 === void 0 ? void 0 : _findStep8.stepDuration; //|| this.state.globalSettings.stepDuration

      D.transitionDuration = (_findStep9 = findStep(D.tour, D.step)) === null || _findStep9 === void 0 ? void 0 : _findStep9.transitionDuration; //|| this.state.globalSettings.transitionDuration

      D.title = (_findStep10 = findStep(D.tour, D.step)) === null || _findStep10 === void 0 ? void 0 : _findStep10.title; //|| `Step ${D.step}`

      D.content = (_findStep11 = findStep(D.tour, D.step)) === null || _findStep11 === void 0 ? void 0 : _findStep11.content; //|| ``

      this.log({
        d: 2,
        f: "getStepData(".concat(D.step, ") - activeTour: ").concat(D.tour),
        v: D
      });
      return D;
    } //----------------------------------------------------------------------------------------------------------------------------------------! getLocation() - moved to Collection
    // getLocation(){
    //   let ASD = this.state.activeStepData
    //   // this.log({
    //   //   d:3,
    //   //   f: `getLocation(${ASD.element})`,
    //   //   v:ASD
    //   // })
    //   let LOC = {
    //     /** Scroll Top */
    //     ST: window.pageYOffset || (document.body.parentNode || document.body).scrollTop,
    //     /** Window Width */
    //     WW: Math.floor(window.innerWidth || 0),
    //     /** Window Height */
    //     WH: Math.floor(window.innerHeight || 0),
    //     /** Element Exists */
    //     E: null,
    //     /** Height */
    //     H: null,
    //     /** Width */
    //     W: null,
    //     /** Top Offset */
    //     T: null,
    //     /** Left Offset */
    //     L: null,
    //   }
    //   const setDefaultLoc = () => {
    //     // console.log('set default location')
    //     LOC.E = false
    //     LOC.H = 0
    //     LOC.W = 0
    //     LOC.T = LOC.WH / 2;
    //     LOC.L = LOC.WW / 2;
    //   }
    //   if(ASD && ASD.element !== '' && typeof ASD.element !== 'null'){
    //       let EL = document.querySelector( ASD.element ) || null
    //     // element could not be found
    //     if(!EL){
    //       setDefaultLoc()
    //       return LOC
    //     }else{
    //       const EL_RECT = EL.getBoundingClientRect();
    //       LOC.E = true
    //       LOC.L = Math.floor(EL_RECT.left - ASD.ringMargin)
    //       LOC.T = Math.floor(EL_RECT.top + LOC.ST - ASD.ringMargin) 
    //       LOC.H = Math.floor(EL_RECT.height + (ASD.ringMargin * 2))
    //       LOC.W = Math.floor(EL_RECT.width + (ASD.ringMargin * 2))
    //       return LOC
    //     }
    //   }
    //   // no ASD or element is null
    //   else{ 
    //     setDefaultLoc()
    //     return LOC
    //   }
    // }
    //----------------------------------------------------------------------------------------------------------------------------------------
    // scroll(){
    //   let ELEMENT = null
    //   let BEHAVIOR =  this.state.activeStepData.scrollBehavior
    //   let V_ALIGN =   this.state.activeStepData.scrollAlignmentVertical
    //   let H_ALIGN =   this.state.activeStepData.scrollAlignmentHorizontal
    //   const alignmentShout = () => {
    //     shout.warn(
    //       `Scroll alignment must be a hyphenated combitaion of values 'start, end, center or nearest'`, 
    //       'The first value defines vertical alignment, the second value defines horizontal alignment',
    //       `eg: 'start-center', 'end-end'`,
    //       `Defaulting to 'center-center'`
    //     )
    //   }
    //   const behaviorShout = () => {
    //     shout.warn(
    //       `Scroll behavior must be either 'smooth' or 'auto'.`,
    //       `Defaulting to 'smooth'`)
    //   }
    //   const selectorShout = () => {
    //     shout.warn(
    //       `Scrolling requires a selector that must be a string of the elements className or id`,
    //       `eg: '.my-element', '#other-element'` 
    //     )
    //   }
    //   /// confirm the selector is valid and the element exists
    //   if(selector && typeof selector === 'string' && selector !== ''){
    //       ELEMENT = document.querySelector( selector ) || null
    //       if(!ELEMENT){
    //         shout.warn(
    //           `No element was found by the selector ${selector}`,
    //         )
    //         return false
    //       }
    //   }else{
    //     return false
    //   }
    //   /// determine the intended scroll behavior
    //   if(behavior && typeof behavior === 'string'){
    //     switch(behavior){
    //       case 'auto': BEHAVIOR = 'auto'; break;
    //       case 'smooth': BEHAVIOR = 'smooth'; break;
    //       default: {
    //         BEHAVIOR = 'smooth'; 
    //       }
    //     }
    //   }else{
    //     BEHAVIOR = 'smooth';
    //      // behaviorShout()
    //   }
    //   /// determine the intended vertical/horizontal alignment
    //   if(alignment && typeof alignment === 'string'){
    //     switch(alignment.split('-')[0]){
    //       case 'start': V_ALIGN = 'start'; break;
    //       case 'end': V_ALIGN = 'end'; break;
    //       case 'center': V_ALIGN = 'smooth'; break;
    //       case 'near':
    //       case 'nearest': V_ALIGN = 'nearest'; break;
    //       default: {
    //         V_ALIGN = 'center';
    //       }
    //     }
    //     switch(alignment.split('-')[1]){
    //       case 'start': H_ALIGN = 'start'; break;
    //       case 'end': H_ALIGN = 'end'; break;
    //       case 'mid':
    //       case 'middle':
    //       case 'center': H_ALIGN = 'smooth'; break;
    //       case 'near':
    //       case 'nearest': H_ALIGN = 'nearest'; break;
    //       default: {
    //         H_ALIGN = 'center'; 
    //       }
    //     }
    //   }else{
    //     H_ALIGN = 'center';
    //     V_ALIGN = 'center'; 
    //     // alignmentShout()
    //   }
    // //   function getScrollParent(node) {
    // //     const isElement = node instanceof HTMLElement;
    // //     const overflowY = isElement && window.getComputedStyle(node).overflowY;
    // //     const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
    // //     if (!node) {
    // //       return null;
    // //     } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
    // //       return node;
    // //     }
    // //     return getScrollParent(node.parentNode) || document.body;
    // //   }
    // // function isInViewport(element) {
    // //   const rect = element.getBoundingClientRect();
    // //   return (
    // //       rect.top >= 0 &&
    // //       rect.left >= 0 &&
    // //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    // //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // //   );
    // // }
    // ELEMENT.scrollIntoView({behavior: BEHAVIOR, block: V_ALIGN, inline: H_ALIGN})
    // }
    //= Validation
    //= ======================================================================================================================================

  }, {
    key: "handleConfigValidation",
    value: function handleConfigValidation(config) {}
  }, {
    key: "validate",
    value: function validate(_ref) {
      var value = _ref.value,
          valid = _ref.valid,
          error = _ref.error;
      var useValue = null;

      if (valid.includes(value)) {
        useValue = value;
      } else {
        useValue = Array.isArray(valid) ? valid[0] : valid;

        if (error) {
          console.log(error, "\nUsing default value: ".concat(useValue));
        } else {
          console.log("ERROR: Value is not valid. \nUsing default value: ".concat(useValue));
        }
      }

      return useValue;
    } //= Tours
    //= ======================================================================================================================================

  }, {
    key: "newTour",
    value: function newTour(tourId, config) {
      this.log({
        d: 1,
        f: "newTour(".concat(tourId, ")"),
        v: config
      });

      if (this.verifyTourExists(tourId)) {
        _shout["default"].error("newTour() \n A tour with the id '".concat(tourId, "' already exists"));

        return false;
      }

      var LIST = this.state.list; // create a new Tour and push to list => requires tour id, tour config and current state

      LIST.push(new _Tour["default"]({
        tourId: tourId,
        config: config,
        globalSettings: this.state.globalSettings
      }));
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
        this.log({
          d: 1,
          f: "getTour(".concat(tourId, ")")
        });
        return TOUR;
      }
    } //= Steps 
    //= ======================================================================================================================================

  }, {
    key: "addSteps",
    value: function addSteps(tourId, newSteps) {
      this.log({
        d: 1,
        f: "addSteps(".concat(tourId, ")"),
        v: newSteps
      });
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
      this.log({
        d: 1,
        f: "next(".concat(tourId, ")")
      });
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
      }).steps[STEP].element; // _scrollToElement(ELEMENT)

      var ASD = this.getStepData(STEP); // this.log(`Brochure | next() - transitionDuration: ${ASD.transitionDuration}`)
      // this.log('ASD + location', ASD, this.state.location)
      // if(this.state.globalSettings.enableAutoProgressionOnNext){
      //   this.enableAutoProgression()
      // }else{
      //   this.disableAutoProgression()
      // }

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
      this.log({
        d: 1,
        f: "prev(".concat(tourId, ")")
      });
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
      }).steps[STEP].element; // this.log(`prev | step: ${STEP}`)

      var ASD = this.getStepData(STEP); // this.log('ASD + location', ASD, this.state.location)
      // if(this.state.globalSettings.enableAutoProgressionOnPrev){
      //   this.enableAutoProgression(ASD)
      // }else{
      //   this.disableAutoProgression()
      // }

      this.setState(function (prevState) {
        prevState.list.find(function (x) {
          return x.id === useTour;
        }).currentStep = STEP;
        prevState.activeStepData = ASD;
        prevState.apValue = ASD.stepDuration || 0; /// prevState.guideLocation = this._findGuide(ELEMENT)

        return prevState;
      }); // _scrollToElement(ELEMENT)
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "reset",
    value: function reset(tourId) {
      var _this5 = this;

      var useTour = this.useTourOrActive(tourId);
      this.log({
        d: 1,
        f: "reset(".concat(tourId, ") - useTour: ").concat(useTour)
      });

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
        prevState.activeStepData = _this5.getStepData();
        return prevState;
      }); // _scrollToElement(ELEMENT)
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "start",
    value: function start(tourId, startAtStep) {
      var _this6 = this;

      var useTour = this.useTourOrActive(tourId);
      this.log({
        d: 1,
        f: "start(".concat(tourId, ") - useTour: ").concat(useTour)
      }); //  const setActiveStepData = () => {
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
        if (typeof startAtStep !== null) {
          console.log("starting at step: ".concat(startAtStep));
          this.setState(function (prevState) {
            prevState.activeTour = useTour;
            prevState.list.filter(function (x) {
              return x.tourId === useTour;
            }).currentStep = startAtStep;
            return prevState;
          }, function () {
            return _this6.run();
          });
        } else {
          console.log("starting at current step");
          this.setState({
            activeTour: useTour
          }, function () {
            return _this6.run();
          });
        }
      }
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "play",
    value: function play() {
      this.log({
        d: 1,
        f: 'play()'
      }); // this.enableAutoProgression()
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "pause",
    value: function pause() {
      this.log({
        d: 1,
        f: 'pause()'
      }); // this.disableAutoProgression()
    } //= Brochure 
    //= ======================================================================================================================================

  }, {
    key: "open",
    value: function open() {
      this.log({
        d: 1,
        f: 'open()'
      });
      this.run();
    } //----------------------------------------------------------------------------------------------------------------------------------------

  }, {
    key: "close",
    value: function close() {
      this.log({
        d: 1,
        f: 'close()'
      });
      this.setState({
        guideOpen: false
      }); // this.disableAutoProgression()
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DataList["default"], {
        data: this.state
      }), /*#__PURE__*/_react["default"].createElement(_Collection["default"], {
        state: this.state,
        ASD: this.state.activeStepData
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