
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
    // console.log('_getLocation')
    
    let D = {}
    let LOC = {}
    let EL


    if(!data){
        D.element = ''
        D.margin = 0
    }else{
        D = data
    }

  
    




    if(D.element !== '' && typeof D.element !== 'null'){
        EL = document.querySelector( D.element ) || null
    }

    let SCROLL_TOP = window.pageYOffset || (document.EL || document.body.parentNode || document.body).scrollTop
    let WINDOW_W = Math.floor(window.innerWidth || 0)
    let WINDOW_H = Math.floor(window.innerHeight || 0)

    LOC.S = SCROLL_TOP
    LOC.WW = WINDOW_W
    LOC.WH = WINDOW_H


    // if(guideOpen){
        
        if(EL != null){ /// if an element selector was found - return the location of the element and window dimensions 
            const EL_RECT = EL.getBoundingClientRect();
            // console.log('getLocation | element found. rect: ',EL_RECT)

            console.log(`getLocation | MARGIN: ${D.margin}`)
            console.log(`getLocation | LEFT: ${EL_RECT.left - D.margin}`)
            console.log(`getLocation | TOP: ${EL_RECT.top + LOC.S - D.margin}`)
            
            LOC.E = true
            LOC.L = Math.floor(EL_RECT.left - D.margin)
            LOC.T = Math.floor(EL_RECT.top + LOC.S - D.margin) 
            LOC.H = Math.floor(EL_RECT.height + (D.margin * 2))
            LOC.W = Math.floor(EL_RECT.width + (D.margin * 2))
            
        }else{ /// if no element selector was found - determine coordinates for the default location of the brochure

            LOC.E = false
            LOC.H = 0
            LOC.W = 0

            LOC.T = WINDOW_H /2;
            LOC.L = WINDOW_W /2;
                
            
        }


    return LOC
}

export default _getLocation