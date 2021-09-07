import shout from './shout'


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
const _scrollToElement = (selector, behavior, alignment) => {


    let ELEMENT = null
    /// define the scroll speed/behavior
    let BEHAVIOR = 'auto'
    /// define the vertical alignment (block)
    let V_ALIGN = 'center'
    /// define the horizontal alignment (inline)
    let H_ALIGN = 'center'


    const alignmentShout = () => {
      shout.warn(
        `Scroll alignment must be a hyphenated combitaion of values 'start, end, center or nearest'`, 
        'The first value defines vertical alignment, the second value defines horizontal alignment',
        `eg: 'start-center', 'end-end'`,
        `Defaulting to 'center-center'`
      )
    }

    const behaviorShout = () => {
      shout.warn(
        `Scroll behavior must be either 'smooth' or 'auto'.`,
        `Defaulting to 'smooth'`)
    }

    const selectorShout = () => {
      shout.warn(
        `Scrolling requires a selector that must be a string of the elements className or id`,
        `eg: '.my-element', '#other-element'` 
      )
    }


    /// confirm the selector is valid and the element exists
    if(selector && typeof selector === 'string' && selector !== ''){
        ELEMENT = document.querySelector( selector ) || null
        if(!ELEMENT){
          shout.warn(
            `No element was found by the selector ${selector}`,
          )
          return false
        }
    }else{
      return false
    }

    /// determine the intended scroll behavior
    if(behavior && typeof behavior === 'string'){
      switch(behavior){
        case 'auto': BEHAVIOR = 'auto'; break;
        case 'smooth': BEHAVIOR = 'smooth'; break;
        default: {
          BEHAVIOR = 'smooth'; 
        }
      }
    }else{
      BEHAVIOR = 'smooth'; // behaviorShout()
    }

    /// determine the intended vertical/horizontal alignment
    if(alignment && typeof alignment === 'string'){
      switch(alignment.split('-')[0]){
        case 'start': V_ALIGN = 'start'; break;
        case 'end': V_ALIGN = 'end'; break;
        case 'center': V_ALIGN = 'smooth'; break;
        case 'near':
        case 'nearest': V_ALIGN = 'nearest'; break;
        default: {
          V_ALIGN = 'center';
        }
      }
      
      switch(alignment.split('-')[1]){
        case 'start': H_ALIGN = 'start'; break;
        case 'end': H_ALIGN = 'end'; break;
        case 'mid':
        case 'middle':
        case 'center': H_ALIGN = 'smooth'; break;
        case 'near':
        case 'nearest': H_ALIGN = 'nearest'; break;
        default: {
          H_ALIGN = 'center'; 
        }
      }
    }else{
      H_ALIGN = 'center';
      V_ALIGN = 'center'; 
      // alignmentShout()
    }





  //   function getScrollParent(node) {
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



    


  ELEMENT.scrollIntoView({behavior: BEHAVIOR, block: V_ALIGN, inline: H_ALIGN})

}

export default _scrollToElement