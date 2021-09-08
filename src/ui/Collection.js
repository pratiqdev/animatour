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

        gsap.to(referenceElement, {
            duration: D.duration, 
            opacity: LOC.E ? 1 : 0,
            width:`${LOC.W + (parseInt(D.ringWidth) * 2)}px`, 
            height: `${LOC.H + (parseInt(D.ringWidth) * 2)}px`, 
            left: `${LOC.L - parseInt(D.ringWidth) }px`, 
            top:`${LOC.T - parseInt(D.ringWidth) }px`,
            borderWidth: D.ringWidth,
            borderColor: D.ringColor,
            borderRadius: '.5rem',
            boxShadow: '0 0 10000px 10000px rgba(150,150,150,.8)',
        });


        update()

    }



    useEffect(()=>{
        if(update){
            updatePositions();
        }
    }, [props.loc])

    


    return(
        <>
        <div
            ref={setReferenceElement}
            style={{
                boxSizing: 'border-box',
                position: "absolute",
                display: 'block',
                border: '1px solid transparent',
                zIndex: '10000',
            }}
            />





            <B.B1 ref={setPopperElement} open={props.open} pass_style={styles.popper} data={props.data} >
                <div ref={setArrowElement} style={styles.arrow} />
            </B.B1>
        </>
    )
}
export default Collection