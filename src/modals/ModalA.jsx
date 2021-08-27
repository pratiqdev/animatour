import React, {useEffect, useState} from 'react'
import p from '../utils/alert'


const ModalA = (props) => {

    let {logic, tour} = props

    let t = logic.list.find(x => x.id === tour)


    if(!tour){
        p('error', 'You must pass a tour id to the guide')
        return false
    }

    if(!t){
        p('error', `The provided tour (${tour}) was not found!`)
        return false
    }

    let step = t.currentStep

    useEffect(()=>{
        console.log(`useEffect | step: ${step}`)   
    }, [props])



    return (
        <div style={{
            position: 'absolute',
            // top: '50%',
            // left: '50%',
            // transform: 'translate(-50%, -50%)',
            border: '1px solid black',
            color:'green',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '10rem',
        }}>
            <h4>Modal A - {step}</h4>
            <div>{t.steps[t.currentStep].content}</div>
            <div>
                <button onClick={() => logic.nextStep(tour)}>next</button>
            </div>
            
        </div>
    )
}
export default ModalA