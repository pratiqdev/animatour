
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

const _getLocation = (data, guideOpen, defaultLocation, exitLocation) => {
    let D = {}
    if(!data){
        D.element = ''
        D.margin = 0
    }else{
        D = data
    }

  
    


    const LOC = {}

    const marg = D.margin ? D.margin : 0

    let EL
    if(D.element !== '' && typeof D.element !== 'null'){
        EL = document.querySelector( D.element ) || null
    }

    //? is the current element is out of scroll range:
    //> get the current visible area of the page (from top to bottom of vp)
    //> check if the element is within this range (plus 'scroll padding' value - to make sure element isnt touching edge of vp)
    //> find the nearest scrollable parent of the target element and scroll to that target elements location plus the 'scroll padding' value


    let SCROLL_TOP = window.pageYOffset || (document.EL || document.body.parentNode || document.body).scrollTop
    let WINDOW_W = Math.floor(window.innerWidth || 0)
    let WINDOW_H = Math.floor(window.innerHeight || 0)

    LOC.S = SCROLL_TOP
    LOC.WW = WINDOW_W
    LOC.WH = WINDOW_H


    // if(guideOpen){
        
        if(EL != null){ /// if an element selector was found - return the location of the element and window dimensions 
            const EL_RECT = EL.getBoundingClientRect();
            
            LOC.E = true
            LOC.L = Math.floor(EL_RECT.left - marg)
            LOC.T = Math.floor(EL_RECT.top + LOC.S - marg) 
            LOC.H = Math.floor(EL_RECT.height + (marg * 2))
            LOC.W = Math.floor(EL_RECT.width + (marg * 2))
            
        }else{ /// if no element selector was found - determine coordinates for the default location of the brochure

            LOC.E = false
            LOC.H = 0
            LOC.W = 0

            switch(defaultLocation){
                case 'top-center':
                case 'top': {
                    LOC.T = 0 + marg;
                    LOC.L = WINDOW_W /2;
                }; break;
                default:{ /// default of center-center
                    LOC.T = WINDOW_H /2;
                    LOC.L = WINDOW_W /2;
                }
            }
        }

    // }else{

    //     LOC.E = false
    //     LOC.H = 0
    //     LOC.W = 0       

    //     //- Select the appropriate location for the exit reference element ---------------------------------------------------------------------
    //     switch(exitLocation){
    //         case 'top': {
    //             LOC.T = 0 - LOC.WH;
    //             LOC.L = LOC.WW /2;
    //         }; break;
    //         default: {
    //             LOC.T = LOC.WH /2;
    //             LOC.L = LOC.WW /2;
    //         }
    //     }
    // }

    return LOC
}

export default _getLocation