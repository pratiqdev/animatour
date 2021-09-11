import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import * as B from './brochure'
import gsap from 'gsap'

const Collection = props => {

    // console.log('collection props', props)

    let D = {}
    if(!props.data){
        // console.log('Collection | No data was found for collection')
        return false
    }else{
        D = props.data
        // console.log('Collection | data:', D)
    }


    let LOC = props.loc
    if(!LOC){
        return false
    }

    let FTO = true /// First Time Opened

    /// if the first element has been found, set FTO to false
    /// this allows start step to appear centered
    if(LOC.E){  
        FTO = false
    }

    /// if brochure is closed, reset FTO to true so it reopens at location if exists
    if(!props.open){
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
    
    const [referenceExit, setReferenceExit] = useState(null);
    const useReference = props.open ? referenceElement : referenceExit

    const { styles, attributes, update } = usePopper(useReference, popperElement, {
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
                duration: FTO ? 0 : D.duration, 
                opacity: LOC.E ? 1 : .5,
                width:`${LOC.W + (parseInt(D.ringWidth) * 2)}px`, 
                height: `${LOC.H + (parseInt(D.ringWidth) * 2)}px`, 
                left: `${LOC.L - parseInt(D.ringWidth) }px`, 
                top:`${LOC.T - parseInt(D.ringWidth) }px`,
                borderWidth: D.ringWidth,
                borderColor: D.ringColor,
                borderRadius: '.5rem',
                boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
            });
        }

        if(referenceExit){
            gsap.to(referenceExit, {
                duration: 1, // D.duration, 
                width: '10px',
                height: '10px',
                left: exitL, 
                top: exitT, 
                opactiy: .2,
            });
        }


        update()
    }



    useEffect(()=>{
        if(update){
            updatePositions();
        }
    }, [props.loc])

    


    return(
        <>
        {props.open ?
            <div
                ref={setReferenceElement}
                style={{
                    boxSizing: 'border-box',
                    position: "absolute",
                    display: props.open ? 'block' : 'none',
                    border: '1px solid transparent',
                    zIndex: '10000',
                }}
            />
        :
            <div ref={setReferenceExit} style={{
                position: "absolute",
                zIndex: '10000',
                width: '10px',
                height: '10px',
                background: 'red',
            }}/>
        }
        





            <B.B1 ref={setPopperElement} open={props.open} pass_style={styles.popper} data={props.data} loc={props.loc}>
                <div ref={setArrowElement} style={styles.arrow} />
            </B.B1>
        </>
    )
}
export default Collection