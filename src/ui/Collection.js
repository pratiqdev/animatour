import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import * as B from './brochure'
import gsap from 'gsap'

const Collection = props => {

    // console.log('collection props', props)

    const S = props.state
    const LOC = S.location
    const ASD = S.activeStepData

    if(!S){
        console.log('Collection | No state passed to collection')
        return false
    }



    let FTO = true /// First Time Opened

    /// if the first element has been found, set FTO to false
    /// this allows start step to appear centered
    if(LOC.E){  
        FTO = false
    }

    /// if brochure is closed, reset FTO to true so it reopens at location if exists
    if(!S.guideOpen){
        FTO = true
    }

    // //- Select the appropriate location for the exit reference element ---------------------------------------------------------------------
    // const exitDirection = 'top'
    // let exitT, exitL

    // switch(exitDirection){
    //     case 'center': {
    //         exitT = `${LOC.WH /2}px`;
    //         exitL = `${LOC.WW /2}px`;
    //     }; break;
    //     case 'top': {
    //         exitT = `${0 - LOC.WH}px`;
    //         exitL = `${LOC.WW /2}px`;
    //     }; break;
    // }



    
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
                    offset: [0, 8],
                },
            }
        ],
    });


    const updatePositions = () => {

        if(referenceElement){
            gsap.to(referenceElement, {
                duration: .8, // FTO ? 0 : ASD.duration, 
                opacity: LOC.E ? 1 : .5,
                width:LOC.W + (parseInt(ASD.ringWidth) * 2), 
                height: LOC.H + (parseInt(ASD.ringWidth) * 2), 
                left: LOC.L - parseInt(ASD.ringWidth), 
                top: LOC.T - parseInt(ASD.ringWidth),
                borderWidth: ASD.ringWidth,
                borderColor: ASD.ringColor,
                borderRadius: '.5rem',
                boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
            });
        }


        update()
    }



    useEffect(()=>{
        if(update){
            updatePositions();
        }
    }, [props.state])

    


    return(
        <>

            <div
                ref={setReferenceElement}
                style={{
                    boxSizing: 'border-box',
                    position: "absolute",
                    display: S.guideOpen ? 'block' : 'none',
                    border: '1px solid transparent',
                    zIndex: '10000',
                }}
            />

        





            <B.B1 ref={setPopperElement} pass_style={styles.popper} S={S}>
                <div ref={setArrowElement} style={styles.arrow} />
            </B.B1>
        </>
    )
}
export default Collection