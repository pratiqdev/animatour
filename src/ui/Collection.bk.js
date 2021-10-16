//- Use guideOpen boolean to conditionally render brochure

import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import * as B from './brochure'
import Ring from  './Ring'
import gsap, {TimelineMax, TweenMax, TweenLite} from 'gsap'

import animatour from '../animatour';
import _scrollToElement from '../utils/scrollToElement'

let FTO = true

const Collection = props => {
    // console.log(`Collection | render()`)
    if(!props.state){
        console.log('Collection | No state passed to collection')
        return false
    }

    let LOC = props.state.location
    let ASD = props.state.activeStepData



    
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);





      


   
    // console.log(`Collection | usePopper()`)

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





    const handleGuideOpen = () => {
        FTO = true
        console.log('Collection | handleGuideOpen')
        if(referenceElement){
            console.log('Collection | opening')
            gsap.to([referenceElement, popperElement], {
                display: 'block',
                duration: 3 || ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
                opacity: 1,
            });
        }
    }  
    
    const handleGuideClose = () => {
        console.log('Collection | handleGuideClose')
        if(referenceElement){
            console.log('Collection | closing')

            let tl_close = new TimelineMax()
            
            tl_close.to([referenceElement,  popperElement], {
                duration: 3 || ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
                opacity: .5,
            }, 0)
            
            tl_close.to([referenceElement,  popperElement], {
                display: 'none',
            }, 3 || ASD.transitionDuration);
        }
    }  

    let tl = new TimelineMax()
    const updatePositions = () => {
        
        if(referenceElement){

            tl.to(referenceElement, {
                duration: 1, //FTO ? 0 : ASD.transitionDuration, 
                width: LOC.W, 
                height: LOC.H, 
                x: LOC.L, 
                y: LOC.T,
                borderWidth: ASD.ringWidth,
                borderColor: ASD.ringColor,
                borderRadius: '.5rem',
                boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
            }, 0)

            FTO = false
        }else{
            console.log(`Collection | updatePositions() - no reference element`)
        }
    }

    



    useEffect(()=>{
        LOC = props.state.location
        ASD = props.state.activeStepData
        if(update && props.state.guideOpen){
            updatePositions();
            update()
        }
    }, [props.state])


    useEffect(()=>{
        props.state.guideOpen ? handleGuideOpen() : handleGuideClose()
    }, [props.state.guideOpen])













    const dataForClone = {
        /// tour / steps
        tour: props.state.activeTour,
        stepTime: props.state.apValue,
        stepTimeTotal: props.state.activeStepData.stepDuration,
    
        /// content
        currentStep: props.state.activeStepData.step,
        totalSteps: props.state.activeStepData.totalSteps,
        title: props.state.activeStepData.title,
        content: props.state.activeStepData.content,
    
        /// labels
        closeLabel: props.state.activeStepData.closeLabel,
        nextLabel: props.state.activeStepData.nextLabel,
        prevLabel: props.state.activeStepData.prevLabel,
    
        /// controls
        next: () => animatour.next(),
        prev: () => animatour.prev(),
        play: () => animatour.play(),
        pause:() => animatour.pause(),
        close:() => animatour.close(),
        reset:() => animatour.reset(),
        
        
    
        /// animations
        transitionDuration: props.state.activeStepData.duration,
    
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
    const clonedBrochure = cloneBrochureWithData()

    return (
        <>
                <div 
                    ref={setReferenceElement}
                    style={{
                        position: "absolute",
                        display: 'none',
                        zIndex: '10000',
                        opacity: .5,
                    }}
                />

                <div 
                    ref={setPopperElement}
                    style={baseStylesForClone}
                    id='BROCHURE'
                >
                    { clonedBrochure }
                </div>
    </>
    )
    

}
export default Collection