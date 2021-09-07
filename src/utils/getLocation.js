
/**
 * Find the location of an element within the document
 * 
 * ---
 * @param {string} selector - the dom selector of the element
 * ---
 * @param {number} margin (number)- the margin to add to the highlighted element. defaults to 0
 * ---
 * @returns {object}
 * 
 * {
 * 
 *  E {bool} - does the element exist within the document
 * 
 *  H {number} - height of the element in pixels
 * 
 *  W {number} - width of the element in pixels
 * 
 *  T {number} - the distance from the top edge of the document in pixels
 * 
 *  L {number} - the distance from the left edge of the document in pixels
 * 
 * }
 */

const _getLocation = (D) => {

    const selector = D.ELEMENT
    const margin = D.MARGIN

    const LOC = {}

    const marg = margin ? margin : 0

    let EL
    if(selector !== '' && typeof selector !== 'null'){
        EL = document.querySelector( selector ) || null
    }

    //? is the current element is out of scroll range:
    //> get the current visible area of the page (from top to bottom of vp)
    //> check if the element is within this range (plus 'scroll padding' value - to make sure element isnt touching edge of vp)
    //> find the nearest scrollable parent of the target element and scroll to that target elements location plus the 'scroll padding' value


    let SCROLL_TOP = window.pageYOffset || (document.EL || document.body.parentNode || document.body).scrollTop
    
    if(EL != null){
        const EL_RECT = EL.getBoundingClientRect();
        
        LOC.E = true
        LOC.L = Math.floor(EL_RECT.left - marg)
        LOC.T = Math.floor(EL_RECT.top + SCROLL_TOP - marg)
        LOC.H = Math.floor(EL_RECT.height + (marg * 2))
        LOC.W = Math.floor(EL_RECT.width + (marg * 2))
        
        
    }else{
        LOC.E = false
        if(window){
            LOC.H = 0
            LOC.W = 0       
            LOC.T = Math.floor((window.innerHeight / 2) + SCROLL_TOP)
            LOC.L = Math.floor(window.innerWidth / 2)
        }
    }



    

    return LOC
}

export default _getLocation