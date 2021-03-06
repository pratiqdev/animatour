"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shout = _interopRequireDefault(require("./shout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Scroll to an element within the document
 * 
 * ---
 * @param {string} selector - the dom selector of the element
 * ---
 * @param {string} behavior - the type of scrolling used for this event. Defaults to 'smooth'
 * ---
 * @param {string} alignment - the alignment of the final state of the scroll. The first value isDefaults to 'center-center'
 * ---
 * @returns void
 */
var _scrollToElement = function _scrollToElement(selector, behavior, alignment, success) {
  var ELEMENT = null; /// define the scroll speed/behavior

  var BEHAVIOR = 'auto'; /// define the vertical alignment (block)

  var V_ALIGN = 'center'; /// define the horizontal alignment (inline)

  var H_ALIGN = 'center';

  var alignmentShout = function alignmentShout() {
    _shout["default"].warn("Scroll alignment must be a hyphenated combitaion of values 'start, end, center or nearest'", 'The first value defines vertical alignment, the second value defines horizontal alignment', "eg: 'start-center', 'end-end'", "Defaulting to 'center-center'");
  };

  var behaviorShout = function behaviorShout() {
    _shout["default"].warn("Scroll behavior must be either 'smooth' or 'auto'.", "Defaulting to 'smooth'");
  };

  var selectorShout = function selectorShout() {
    _shout["default"].warn("Scrolling requires a selector that must be a string of the elements className or id", "eg: '.my-element', '#other-element'");
  }; /// confirm the selector is valid and the element exists


  if (selector && typeof selector === 'string' && selector !== '') {
    ELEMENT = document.querySelector(selector) || null;

    if (!ELEMENT) {
      _shout["default"].warn("No element was found by the selector ".concat(selector));

      return false;
    }
  } else {
    return false;
  } /// determine the intended scroll behavior


  if (behavior && typeof behavior === 'string') {
    switch (behavior) {
      case 'auto':
        BEHAVIOR = 'auto';
        break;

      case 'smooth':
        BEHAVIOR = 'smooth';
        break;

      default:
        {
          BEHAVIOR = 'smooth';
        }
    }
  } else {
    BEHAVIOR = 'smooth'; // behaviorShout()
  } /// determine the intended vertical/horizontal alignment


  if (alignment && typeof alignment === 'string') {
    switch (alignment.split('-')[0]) {
      case 'start':
        V_ALIGN = 'start';
        break;

      case 'end':
        V_ALIGN = 'end';
        break;

      case 'center':
        V_ALIGN = 'smooth';
        break;

      case 'near':
      case 'nearest':
        V_ALIGN = 'nearest';
        break;

      default:
        {
          V_ALIGN = 'center';
        }
    }

    switch (alignment.split('-')[1]) {
      case 'start':
        H_ALIGN = 'start';
        break;

      case 'end':
        H_ALIGN = 'end';
        break;

      case 'mid':
      case 'middle':
      case 'center':
        H_ALIGN = 'smooth';
        break;

      case 'near':
      case 'nearest':
        H_ALIGN = 'nearest';
        break;

      default:
        {
          H_ALIGN = 'center';
        }
    }
  } else {
    H_ALIGN = 'center';
    V_ALIGN = 'center'; // alignmentShout()
  } //   function getScrollParent(node) {
  //     const isElement = node instanceof HTMLElement;
  //     const overflowY = isElement && window.getComputedStyle(node).overflowY;
  //     const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
  //     if (!node) {
  //       return null;
  //     } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
  //       return node;
  //     }
  //     return getScrollParent(node.parentNode) || document.body;
  //   }
  // function isInViewport(element) {
  //   const rect = element.getBoundingClientRect();
  //   return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }


  ELEMENT.scrollIntoView({
    behavior: BEHAVIOR,
    block: V_ALIGN,
    inline: H_ALIGN
  });
};

var _default = _scrollToElement;
exports["default"] = _default;