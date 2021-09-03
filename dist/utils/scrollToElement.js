"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _scrollToElement = function _scrollToElement(selector) {
  var el = null;

  if (selector !== '' && typeof selector !== 'null') {
    el = document.querySelector(selector) || null;
  }

  function getScrollParent(node) {
    var isElement = node instanceof HTMLElement;
    var overflowY = isElement && window.getComputedStyle(node).overflowY;
    var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

    if (!node) {
      return null;
    } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
      return node;
    }

    return getScrollParent(node.parentNode) || document.body;
  }

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  if (el != null) {
    var SCROLL_PARENT = getScrollParent(el); // if(!isInViewport(el)){

    el.scrollIntoView({
      behavior: 'smooth',
      block: "center",
      inline: "nearest"
    }); // }
  }
};

var _default = _scrollToElement;
exports["default"] = _default;