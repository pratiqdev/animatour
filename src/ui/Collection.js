import React, { useState, useEffect } from 'react';
import Popper from '@popper';
import * as B from './brochure'

const Collection = props => {


    let LOC = props.loc
    if(!LOC){
        return false
    }

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes, scheduleUpdate } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    useEffect(()=>{
        scheduleUpdate()
    }, [props.loc])

    return(
        <>
        <div
            ref={setReferenceElement}
            {...attributes.popper}
            onClick={e=>{e.preventDefault(), e.stopPropagation()}}
                style={{
                position: "absolute",
                display: 'block',
                zIndex: 10000,
                borderRadius: ".5rem",
                opacity: LOC.exist ? "1" : "0",
                border: "1px solid",
                borderColor: "red",
                width: `${LOC.W}px`,
                height: `${LOC.H}px`,
                top: `${LOC.T}px`,
                left: `${LOC.L}px`,
                // boxShadow: `0 0 10000px 10000px grey`,
                transition: "all .5s, opacity .2s",
                pointerEvents: 'none',
                }}
            />


            <B.B1 ref={setPopperElement} open={props.open} tour={props.tour} pass_style={styles.popper}>
                <div ref={setArrowElement} style={styles.arrow} />
            </B.B1>
        </>
    )
}
export default Collection