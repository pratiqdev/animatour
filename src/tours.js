
//- TODO
//- add all config options to Main class
//- add all step options to step class


import "core-js/stable";
import "regenerator-runtime/runtime";
/// import p from '../package.json' /// do not import from package when using webpack, will include entire package json file in output
import React from 'react'

import modalTest from "./modals/modalTest";
import createSteps from './utils/createSteps'




const tours = {
    /// declare a config object that contains all settings, values and steps for this instance 
    list: [
        {
            id: 'Default Tour',
            config: {
                ringColor:      '#ccc',
                ringWidth:      '#ccc',
            },
            currentStep: 0,
            steps:[
                {
                    title: 'STEP 0',
                    element: '.step-0-element',
                    content: 'Step Zero Content'
                },
                {
                    title: 'STEP 1',
                    element: '.step-1-element',
                    content: 'Step One Content'
                }
            ]
        }
    ],

    test: () => {console.log('test???')},

    
    //----------------------------------------------------------------------------------------------------------------- step modifiers -----
    addSteps: (tourId, newSteps) => { 
        let tour = this.list.find(x => x.id === tourId)
        tour.steps = createSteps(newSteps, tourSteps) 
    },
    
    
    //---------------------------------------------------------------------------------------------------------------- ring modifiers ------
    setRingColor: (x) => { this.config.ringColor = x },
    setRingWidth: (x) => { this.config.ringWidth = x },
    
    
    //---------------------------------------------------------------------------------------------------------------- step controls -------
    nextStep: (tourId) => { 
        let tour = tours.list.find(x => x.id === tourId)
        tour.currentStep++ ;console.log(`NEXT!! step ${tour.currentStep}`);  
    },

    prevStep: () => { this.config.currentStep-- ;console.log(`PREV!! step ${this.config.currentStep}`);  },
    setStep: (step) => {
        console.log('ANIMATOUR | set step')
        this.config.currentStep = step
    },









}
export default tours