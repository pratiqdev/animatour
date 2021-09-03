const _scrollToElement = (selector) => {


    let el = null
    if(selector !== '' && typeof selector !== 'null'){
        el = document.querySelector( selector ) || null
    }



    function getScrollParent(node) {
      const isElement = node instanceof HTMLElement;
      const overflowY = isElement && window.getComputedStyle(node).overflowY;
      const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
    
      if (!node) {
        return null;
      } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
        return node;
      }
    
      return getScrollParent(node.parentNode) || document.body;
    }



  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }



    

    if(el != null){
        let SCROLL_PARENT = getScrollParent(el)      

        // if(!isInViewport(el)){
          el.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"})
        // }
    }

}

export default _scrollToElement