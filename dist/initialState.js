"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.async-iterator.js");

require("core-js/modules/es.symbol.has-instance.js");

require("core-js/modules/es.symbol.is-concat-spreadable.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.symbol.match.js");

require("core-js/modules/es.symbol.replace.js");

require("core-js/modules/es.symbol.search.js");

require("core-js/modules/es.symbol.species.js");

require("core-js/modules/es.symbol.split.js");

require("core-js/modules/es.symbol.to-primitive.js");

require("core-js/modules/es.symbol.to-string-tag.js");

require("core-js/modules/es.symbol.unscopables.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.copy-within.js");

require("core-js/modules/es.array.every.js");

require("core-js/modules/es.array.fill.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.last-index-of.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.of.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reduce-right.js");

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.species.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.array.unscopables.flat.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.array-buffer.constructor.js");

require("core-js/modules/es.array-buffer.is-view.js");

require("core-js/modules/es.array-buffer.slice.js");

require("core-js/modules/es.data-view.js");

require("core-js/modules/es.date.now.js");

require("core-js/modules/es.date.to-iso-string.js");

require("core-js/modules/es.date.to-json.js");

require("core-js/modules/es.date.to-primitive.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.function.has-instance.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.json.to-string-tag.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.math.acosh.js");

require("core-js/modules/es.math.asinh.js");

require("core-js/modules/es.math.atanh.js");

require("core-js/modules/es.math.cbrt.js");

require("core-js/modules/es.math.clz32.js");

require("core-js/modules/es.math.cosh.js");

require("core-js/modules/es.math.expm1.js");

require("core-js/modules/es.math.fround.js");

require("core-js/modules/es.math.hypot.js");

require("core-js/modules/es.math.imul.js");

require("core-js/modules/es.math.log10.js");

require("core-js/modules/es.math.log1p.js");

require("core-js/modules/es.math.log2.js");

require("core-js/modules/es.math.sign.js");

require("core-js/modules/es.math.sinh.js");

require("core-js/modules/es.math.tanh.js");

require("core-js/modules/es.math.to-string-tag.js");

require("core-js/modules/es.math.trunc.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.number.epsilon.js");

require("core-js/modules/es.number.is-finite.js");

require("core-js/modules/es.number.is-integer.js");

require("core-js/modules/es.number.is-nan.js");

require("core-js/modules/es.number.is-safe-integer.js");

require("core-js/modules/es.number.max-safe-integer.js");

require("core-js/modules/es.number.min-safe-integer.js");

require("core-js/modules/es.number.parse-float.js");

require("core-js/modules/es.number.parse-int.js");

require("core-js/modules/es.number.to-fixed.js");

require("core-js/modules/es.number.to-precision.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-getter.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.define-setter.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.object.freeze.js");

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.get-own-property-names.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.object.is.js");

require("core-js/modules/es.object.is-extensible.js");

require("core-js/modules/es.object.is-frozen.js");

require("core-js/modules/es.object.is-sealed.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.lookup-getter.js");

require("core-js/modules/es.object.lookup-setter.js");

require("core-js/modules/es.object.prevent-extensions.js");

require("core-js/modules/es.object.seal.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.parse-float.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.reflect.apply.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.reflect.define-property.js");

require("core-js/modules/es.reflect.delete-property.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.reflect.get-own-property-descriptor.js");

require("core-js/modules/es.reflect.get-prototype-of.js");

require("core-js/modules/es.reflect.has.js");

require("core-js/modules/es.reflect.is-extensible.js");

require("core-js/modules/es.reflect.own-keys.js");

require("core-js/modules/es.reflect.prevent-extensions.js");

require("core-js/modules/es.reflect.set.js");

require("core-js/modules/es.reflect.set-prototype-of.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.flags.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/es.string.code-point-at.js");

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.string.from-code-point.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.string.pad-end.js");

require("core-js/modules/es.string.pad-start.js");

require("core-js/modules/es.string.raw.js");

require("core-js/modules/es.string.repeat.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.trim-end.js");

require("core-js/modules/es.string.trim-start.js");

require("core-js/modules/es.string.anchor.js");

require("core-js/modules/es.string.big.js");

require("core-js/modules/es.string.blink.js");

require("core-js/modules/es.string.bold.js");

require("core-js/modules/es.string.fixed.js");

require("core-js/modules/es.string.fontcolor.js");

require("core-js/modules/es.string.fontsize.js");

require("core-js/modules/es.string.italics.js");

require("core-js/modules/es.string.link.js");

require("core-js/modules/es.string.small.js");

require("core-js/modules/es.string.strike.js");

require("core-js/modules/es.string.sub.js");

require("core-js/modules/es.string.sup.js");

require("core-js/modules/es.typed-array.float32-array.js");

require("core-js/modules/es.typed-array.float64-array.js");

require("core-js/modules/es.typed-array.int8-array.js");

require("core-js/modules/es.typed-array.int16-array.js");

require("core-js/modules/es.typed-array.int32-array.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.uint8-clamped-array.js");

require("core-js/modules/es.typed-array.uint16-array.js");

require("core-js/modules/es.typed-array.uint32-array.js");

require("core-js/modules/es.typed-array.copy-within.js");

require("core-js/modules/es.typed-array.every.js");

require("core-js/modules/es.typed-array.fill.js");

require("core-js/modules/es.typed-array.filter.js");

require("core-js/modules/es.typed-array.find.js");

require("core-js/modules/es.typed-array.find-index.js");

require("core-js/modules/es.typed-array.for-each.js");

require("core-js/modules/es.typed-array.from.js");

require("core-js/modules/es.typed-array.includes.js");

require("core-js/modules/es.typed-array.index-of.js");

require("core-js/modules/es.typed-array.iterator.js");

require("core-js/modules/es.typed-array.join.js");

require("core-js/modules/es.typed-array.last-index-of.js");

require("core-js/modules/es.typed-array.map.js");

require("core-js/modules/es.typed-array.of.js");

require("core-js/modules/es.typed-array.reduce.js");

require("core-js/modules/es.typed-array.reduce-right.js");

require("core-js/modules/es.typed-array.reverse.js");

require("core-js/modules/es.typed-array.set.js");

require("core-js/modules/es.typed-array.slice.js");

require("core-js/modules/es.typed-array.some.js");

require("core-js/modules/es.typed-array.sort.js");

require("core-js/modules/es.typed-array.subarray.js");

require("core-js/modules/es.typed-array.to-locale-string.js");

require("core-js/modules/es.typed-array.to-string.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.weak-set.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.queue-microtask.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url.to-json.js");

require("core-js/modules/web.url-search-params.js");

require("regenerator-runtime/runtime");

var _react = _interopRequireWildcard(require("react"));

var _modalTest = _interopRequireDefault(require("./modals/modalTest"));

var _createSteps = _interopRequireDefault(require("./utils/createSteps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/// import p from '../package.json' /// do not import from package when using webpack, will include entire package json file in output
var InitialState = {
  /// declare a config object that contains all settings, values and steps for this instance 
  list: [{
    id: 'Default Tour',
    config: {
      ringColor: '#ccc',
      ringWidth: '#ccc'
    },
    currentStep: 0,
    steps: [{
      title: 'STEP 0',
      element: '.step-0-element',
      content: 'Step Zero Content'
    }, {
      title: 'STEP 1',
      element: '.step-1-element',
      content: 'Step One Content'
    }]
  }]
}; // test: () => {console.log('test???')},
// //----------------------------------------------------------------------------------------------------------------- step modifiers -----
// addSteps: (tourId, newSteps) => { 
//     let tour = this.list.find(x => x.id === tourId)
//     tour.steps = createSteps(newSteps, tourSteps) 
// },
// //---------------------------------------------------------------------------------------------------------------- ring modifiers ------
// setRingColor: (x) => { this.config.ringColor = x },
// setRingWidth: (x) => { this.config.ringWidth = x },
// //---------------------------------------------------------------------------------------------------------------- step controls -------
// nextStep: (tourId) => { 
//     let tour = tours.list.find(x => x.id === tourId)
//     tour.currentStep++ ;console.log(`NEXT!! step ${tour.currentStep}`);  
// },
// prevStep: () => { this.config.currentStep-- ;console.log(`PREV!! step ${this.config.currentStep}`);  },
// setStep: (step) => {
//     console.log('ANIMATOUR | set step')
//     this.config.currentStep = step
// },

var _default = InitialState;
exports["default"] = _default;