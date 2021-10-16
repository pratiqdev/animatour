//- Use guideOpen boolean to conditionally render brochure

import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import * as B from './brochure'
import Ring from  './Ring'
import gsap, {TimelineMax, TweenMax, TweenLite} from 'gsap'

import animatour from '../animatour';
import _scrollToElement from '../utils/scrollToElement'

let FTO = true
let externalASD = null

// let globalTimeline = gsap.timeline()





const Collection = props => {
    // console.log(`Collection | render()`)
    if(!props.state){
        console.log('Collection | No state passed to collection')
        return false
    }
    
    // let LOC = props.state.location
    let locationFound
    let ASD = props.ASD
    const [perf, setPerf] = useState('X')

   
    // console.log('Collection | new instance - asd:', ASD)



    // request handle
    // let requestFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    // let cancelFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    let requestHandle






    /// POPPER _____________________________________________________________________________________________________________________________
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        modifiers: [
            { name: 'arrow', 
                options: { 
                    element: arrowElement 
                } 
            },
            {name: 'offset',
                options: {
                    offset: [0, 8], //! should use two values from settings - offset and alignment?
                },
            }
        ],
    });





    /// GET LOCATION _______________________________________________________________________________________________________________________
    const getLocationOfElement = () => {
        // console.log(`Collection | getLocationOfElement - element: ${ASD.element}`)
        
        let LOC = {
    
          /** Scroll Top */
          ST: window.pageYOffset || (document.body.parentNode || document.body).scrollTop,
          /** Window Width */
          WW: Math.floor(window.innerWidth || 0),
          /** Window Height */
          WH: Math.floor(window.innerHeight || 0),
          /** Element Exists */
          E: null,
          /** Height */
          H: null,
          /** Width */
          W: null,
          /** Top Offset */
          T: null,
          /** Left Offset */
          L: null,
        }
    
        const setDefaultLoc = () => {
        //   console.log('Collection | getLocationOfElement - set default location')
          LOC.E = false
          LOC.H = 0
          LOC.W = 0
          LOC.T = LOC.WH / 2;
          LOC.L = LOC.WW / 2;
        }
    
        if(props.ASD && props.ASD.element !== '' && typeof props.ASD.element !== 'null'){
            let EL = document.querySelector( props.ASD.element ) || null
          // element could not be found
          if(!EL){
            setDefaultLoc()
            return LOC
          }else{
            const EL_RECT = EL.getBoundingClientRect();
            LOC.E = true
            LOC.L = Math.round(EL_RECT.left - props.ASD.ringMargin)
            LOC.T = Math.round(EL_RECT.top + LOC.ST - props.ASD.ringMargin) 
            LOC.H = Math.round(EL_RECT.height + (props.ASD.ringMargin * 2))
            LOC.W = Math.round(EL_RECT.width + (props.ASD.ringMargin * 2))
            // console.log('Collection | getLocationOfElement - set element location:', LOC)

            return LOC
          }
        }
        else{ 
          setDefaultLoc()
          return LOC
        }
    }

    
    // let localTimeline = gsap.timeline()
    let tween
    const animateToPosition = () => {
        
        if(referenceElement){
            locationFound = getLocationOfElement()
            if(ASD.step == 5){
                console.log(`Collection | animateToPosition - el 5 LEFT: ${locationFound.L}`)
            }
            
            
            // let superLocalTimeline = gsap.timeline()
            tween = gsap.to(referenceElement, {
                duration: 1, //ASD.transitionDuration, 
                width: locationFound.W, 
                height: locationFound.H, 
                x: locationFound.L, 
                y: locationFound.T,
                borderWidth: ASD.ringWidth,
                borderColor: ASD.ringColor,
                borderRadius: '.5rem',
                boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
                // onComplete: console.log('Collection | gsap anim completed'),
                // onUpdate: console.log('Collection | gsap update'),
                repeatRefresh: true,
                overwrite: 'auto',
            })

            
            if(FTO){
                FTO = false
            }
            update()
        }else{
            console.error(`Collection | updatePositions() - no reference element`)
        }
    }





    /// RUN SEQUENCE _______________________________________________________________________________________________________________________
    const runSequence = () => {
        
        
        
        if(props.state.guideOpen){
            // console.log(`Collection | running`)
            const t0 = performance.now()
            animateToPosition()
            const t1 = performance.now()
            setPerf(t1 - t0)
            requestHandle = window.requestAnimationFrame(runSequence)
        }
    }







    /// OPEN / CLOSE _______________________________________________________________________________________________________________________
    const handleGuideOpen = () => {
        FTO = true

        // console.log('Collection | handleGuideOpen')
        if(referenceElement){
            gsap.to([referenceElement, popperElement], {
                display: 'block',
                duration: ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
                autoAlpha: 1,
            });
        }
    }  
    
    const handleGuideClose = () => {
        // console.log(`Collection | handleGuideClose - guideOpen: ${props.state.guideOpen}`)
        if(referenceElement){
            let tl_close = new TimelineMax()
            
            tl_close.to([referenceElement,  popperElement], {
                duration: ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
                autoAlpha: 0,

            }, 0)

        }
    }  
    

    
 






 
    /// RUN SEQUENCE ON PROPS CHANGE _______________________________________________________________________________________________________
    useEffect(()=>{
        ASD = props.ASD
        // console.log(`Collection | useEffect - props change - ASD:`, ASD)

        if(props.state.guideOpen){
            console.log('Collection | run sequence')
            runSequence()
            // handleGuideOpen()
        }else{
            // handleGuideClose()
            console.log('Collection | stopped')
            window.cancelAnimationFrame(requestHandle)
            setPerf('X')
        }
        return () => {
            window.cancelAnimationFrame(requestHandle)
            tween = null
            console.log('Collection | nullified the tween')
        }
    }, [props])


    /// HANDLE GUIDE OPEN / CLOSE __________________________________________________________________________________________________________
    useEffect(()=>{
        // console.log(`Collection | useEffect - guideOpen change`)

        if(props.state.guideOpen){
            handleGuideOpen()
        }else{
            handleGuideClose()
        }
    }, [props.state.guideOpen])










    /// CLONING ____________________________________________________________________________________________________________________________
    const dataForClone = {
        /// tour / steps
        tour: props.state.activeTour,
        stepTime: props.state.apValue,
        stepTimeTotal: props.ASD.stepDuration,
    
        /// content
        currentStep: props.ASD.step,
        totalSteps: props.ASD.totalSteps,
        title: props.ASD.title,
        content: props.ASD.content,
    
        /// labels
        closeLabel: props.ASD.closeLabel,
        nextLabel: props.ASD.nextLabel,
        prevLabel: props.ASD.prevLabel,
    
        /// controls
        next: () => animatour.next(),
        prev: () => animatour.prev(),
        play: () => animatour.play(),
        pause:() => animatour.pause(),
        close:() => animatour.close(),
        reset:() => animatour.reset(),
        
        
    
        /// animations
        transitionDuration: props.ASD.duration,
    
        /// adv data
        debugMode: props.state.debug,
    
    }
    
    const baseStylesForClone = {
        zIndex: '10001',
        ...styles.popper
    }

    const cloneBrochureWithData = () => {
        if(props.state.modal && React.isValidElement(props.state.modal)){
            return React.cloneElement(props.state.modal, { ...dataForClone });
        }
    }
    const brochureClone = cloneBrochureWithData()




    return (
        <>
            <div style={{position: 'fixed', top: '0', left: '0', background: '#f66', padding: '5px', width: '2rem', zIndex: '9999999'}}>{perf}</div>
            <div 
                ref={setReferenceElement}
                id='refElId'
                style={{
                    position: "absolute",
                    display: 'none',
                    visibility: 'hidden',
                    zIndex: '10000',
                    opacity: 0,
                    border:'0px solid transparent',
                }}
            />

            <div 
                ref={setPopperElement}
                style={baseStylesForClone}
                id='BROCHURE'
            >
                { brochureClone }
            </div>
    </>
    )
    

}
export default Collection