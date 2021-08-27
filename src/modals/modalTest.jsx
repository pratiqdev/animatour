//- TODO
//- add option to use int to select which modal to use
//- add tests to confirm that custom modal has the required fields and buttons

import React from 'react'

import ModalA from './ModalA'





const modalCheck = (x, config) => {
    console.log(`modal check step: ${config.currentStep}`)
    if(!x){ return <ModalA config={config} /> }
    if(typeof x === 'number'){
        switch(x){

            default:{ return <ModalA config={config} /> }
        }
    }



}

export default modalCheck