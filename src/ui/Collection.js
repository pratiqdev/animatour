import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import * as B from './brochure'

const Collection = props => {

    if(!props.data){
        console.log('No data was found for collectoin!!!')
        return false
    }


    let LOC = props.loc
    if(!LOC){
        return false
    }





    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    useEffect(()=>{
        if(update){
            update();
        }
    }, [props.loc])

    


    return(
        <>
        <div
            ref={setReferenceElement}
            // onClick={e=>{e.preventDefault(), e.stopPropagation()}}
            onClick={()=>update()}
                style={{
                position: "absolute",
                display: 'block',
                zIndex: 10000,
                borderRadius: ".5rem",
                opacity: LOC.E ? "1" : "0",
                border: `1px solid`,
                borderColor: 'red',
                width: `${LOC.W}px`,
                height: `${LOC.H}px`,
                top: `${LOC.T}px`,
                left: `${LOC.L}px`,
                // boxShadow: `0 0 10000px 10000px grey`,
                transition: "all .5s, opacity .2s",
                // pointerEvents: 'none',
                }}
            />

        {/* <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            Popper element
            <div ref={setArrowElement} style={styles.arrow} />
        </div> */}


            <B.B1 ref={setPopperElement} open={props.open} pass_style={styles.popper} data={props.data} />
        </>
    )
}
export default Collection