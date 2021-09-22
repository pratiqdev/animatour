import React, {forwardRef, useEffect, useRef, useState} from 'react'

const Ring = React.forwardRef((props, ref) => {

    useEffect(()=>{
        
        return () => {

        }
    }, [])

    return(
        <div 
            ref={ref}
            style={{
                boxSizing: 'border-box',
                position: "absolute",
                display: 'block',
                border: '1px solid transparent',
                zIndex: '10000',
                opacity: .3,
            }}
        ></div>
    )
})

export default Ring