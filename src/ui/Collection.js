//- Use guideOpen boolean to conditionally render brochure

import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import * as B from './brochure'
import Ring from  './Ring'
import gsap, {TimelineMax} from 'gsap'

import animatour from '../animatour';
import _scrollToElement from '../utils/scrollToElement'

const Collection = props => {

    let LOC = props.state.location
    let ASD = props.state.activeStepData



    const [FTO, setFTO] = useState(true)
    
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);





      


    if(!props.state){
        console.log('Collection | No state passed to collection')
        return false
    }

    //~ A.2 - check if reference exists and exec anims
    const handleGuideOpen = () => {
        console.log('Collection | handleGuideOpen')

        if(referenceElement){
            console.log('Collection | opening')

            // let tl_open = new TimelineMax()
            
           

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
            
            tl_close.to([referenceElement, popperElement], {
                duration: 3 || ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
                opacity: 0,
            }, 0)
            
            tl_close.to([referenceElement, popperElement], {
                display: 'none',
            }, 3 || ASD.transitionDuration);
        }
    }  
    
    

    

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


    const updatePositions = () => {
  
        if(referenceElement){

            let t1 = new TimelineMax();

            t1.to(referenceElement, {
                duration: FTO ? 0 : (ASD.transitionDuration || 0), // FTO ? 0 : ASD.duration, 
                // duration: ASD.transitionDuration, // FTO ? 0 : ASD.duration, 
                width:LOC.W + (parseInt(ASD.ringWidth) * 2), 
                height: LOC.H + (parseInt(ASD.ringWidth) * 2), 
                x: LOC.L - parseInt(ASD.ringWidth), 
                y: LOC.T - parseInt(ASD.ringWidth),
                borderWidth: ASD.ringWidth,
                borderColor: ASD.ringColor,
                borderRadius: '.5rem',
                boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
            }, 0)

            FTO && setFTO(false)
        }
    }



    useEffect(()=>{
        if(update && props.state.guideOpen){
            updatePositions();
            update()
        }
        LOC = props.state.location
        ASD = props.state.activeStepData
    }, [props.state])



    //~ A.1 - state.guideOpen set to true => setShowElements(true)
    useEffect(()=>{
        props.state.guideOpen ? handleGuideOpen() : handleGuideClose()
    }, [props.state.guideOpen])




    const clonedBrochureData = {
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
    const theme = {
        text: '#fff',
        background: '#000',
        primary: '#20c',
        secondary: '#aaa',
        tertiary: '',
        spacing: ['0', '.2em', '.4em', '.8em', '1.6em'],
        fontSize: ['.6em', '.8em', '1em', '1.2em', '1.4em'],
        maxWidth: '80vw',
        minWidth: '10rem',
        width: '20rem',
    }
    const border = {
    primary: {
        type: '',
        color: '',
    },
    secondary: {
        type: '1px solid',
        color: theme.secondary,
    }
    }
    const style = {
    container: {
        ...styles.popper,
        boxSizing: 'border-box',
        zIndex: '10001',
        background: theme.background,
        color: theme.text,
        position: LOC.E ? 'absolute' : 'fixed', //! if using 'fixed' - remove SCROLL_TOP from _getLocation()
        opacity: .2,
        display: 'none'
    },
    header: {
        fontSize: theme.fontSize[2],
        borderBottom: border.secondary.type,
        borderColor: border.secondary.color,
        padding: theme.spacing[2],
    },
    content: {
        fontSize: theme.fontSize[1],
        padding: theme.spacing[2]
    },
    footer: {
        padding: theme.spacing[2],
        display: 'flex',
        justifyContent: 'space-between',

    },
    exitButton: {
        color: 'red'
    }
    }


    
    const NoBrochure = () => {
    return(
        <>
        <div style={style.header} className='header'>{ASD.step} - {ASD.title}</div>
        <div style={style.content} className='content'>
        {/* apActive: {S.apActive ? 'playing' : 'paused'} | {S.apValue}<br /> */}
        {ASD.content}
        </div>
        <div style={style.footer} className='footer'>
        <button style={style.exitButton} onClick={() => animatour.close()}>{ASD.exitLabel}</button>
        <div>
            <button style={style.prevButton} onClick={()=>animatour.play()}>Play</button>
            <button style={style.prevButton} onClick={()=>animatour.pause()}>Pause</button>
            <button style={style.prevButton} onClick={()=>animatour.prev()}>{ASD.prevLabel}</button>
            <button style={style.nextButton} onClick={()=>animatour.next()}>{ASD.nextLabel}</button>
            <button onMouseOver={()=>console.log('TEST on mouse over')} onClick={()=>console.log('TEST click')}>TEST</button>
        </div>
        </div>
        {props.children}
        {props.state.apActive &&
        <progress id="apv" style={{width: '100%', margin:'0'}} value={ASD.stepDuration - props.state.apValue} max={ASD.stepDuration} />
        }
        </>
    )
    }









    const determineActiveBrochure = () => {
    if(props.state.modal && React.isValidElement(props.state.modal)){
        // console.log('Collection | using supplied brochure')
        return React.cloneElement(props.state.modal, { ...clonedBrochureData });
    }else{
        // console.log('Collection | using built-in brochure')
        return <NoBrochure />
    }
    }

    return (
        <>
                {/* <Ring ref={setReferenceElement} state={props.state}/> */}
                <div 
                    ref={setReferenceElement}
                    style={{
                        boxSizing: 'border-box',
                        position: "absolute",
                        display: 'none',
                        border: '1px solid transparent',
                        zIndex: '10000',
                        opacity: .2,
                    }}
                ></div>

                <div ref={setPopperElement}
                style={style.container}
                className='brochure1'  
                id='BROCHURE'>
                    { determineActiveBrochure() }
                    {/* <div ref={setArrowElement} style={styles.arrow} /> */}
                </div>
    </>
    )
    

}
export default Collection