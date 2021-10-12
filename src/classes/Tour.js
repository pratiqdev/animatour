import React from 'react'
import shout from '../utils/shout'
import createSteps from '../utils/createSteps'

import {B1, B2, B3} from '../ui/brochure'


class Tour{
    // x is config
    constructor(data){
        const {tourId, config, globalSettings} = data

        if(!tourId){
            shout.error(`Must provide at least a tour name when creating a new tour: 'newTour('tour id', {...config})'`);
            return false
          }
        /// alert user of incorrect keys
        Object.keys(config).forEach(key =>{
            switch(key){
                case 'step':
                case 'useStep':
                case 'current':
                case 'currentStp':
                case 'currntStep': shout.warn(`newTour | '${key}' was used... did you mean 'currentStep' ?`) ;break;
            }
        })

        this.id                 = tourId
        this.modal              = config.modal                || null

        //>_______________________________________________________________________________________________________________________
        //? how should tour settings be defined??
        //> step settings have precedence over tour settings
        //> tour settings have precedence over default settings...
        //>
        //? how will steps access tour settings?
        //> globalSettings and tourSettings should be passed to createSteps / Step
        //>_______________________________________________________________________________________________________________________

        /** @deprecated use 'tourSettings.stepDuration' */
        this.stepDuration       = config.stepDuration ?? globalSettings.stepDuration

        this.tourSettings = {
            stepDuration: config.stepDuration               ?? globalSettings.stepDuration,
            transitionDuration: config.transitionDuration   ?? globalSettings.transitionDuration,

            // labels
            closeLabel: config.closeLabel                   ?? globalSettings.closeLabel,
            nextLabel:  config.nextLabel                    ?? globalSettings.nextLabel,
            prevLabel:  config.prevLabel                    ?? globalSettings.prevLabel,

            // ring
            ringMargin: config.ringMargin                   ?? globalSettings.ringMargin,
            ringColor:  config.ringColor                    ?? globalSettings.ringColor,
            ringWidth:  config.ringWidth                    ?? globalSettings.ringWidth,
        }

        this.steps              = createSteps({
                                        newSteps: config.steps, 
                                        tourSettings: this.tourSettings, 
                                    })      

        /// currentStep 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// ensure that the currentStep is within the range of 0 and number of steps

            if(config.currentStep < 0){
                shout.warn(`newTour({currentStep: ${config.currentStep}}) \n 'currentStep' was less than 0 \n defaulting to 0 (first step)`)
                this.currentStep = 0
            }
            else if(config.currentStep > this.steps.length - 1){
                shout.warn(`newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ${this.steps.length === 0 ? 0 : this.steps.length - 1} (last step)`)
                this.currentStep = this.steps.length === 0 ? 0 : this.steps.length - 1
            }
            else{
                this.currentStep = config.currentStep
            }


        /// modal 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// if a modal is supplied - make sure it is a valid element
        /// if no modal supplied - use default (0) built-in modal
        
            if(!config.modal){
                this.modal = <B3 />
                console.log('Tour | using default modal: <B3 />')
            }else{
                if(typeof config.modal === 'number'){
                    switch(config.modal){
                        case 0: {console.log('Tour | using modal: 0')}; break;
                        default: {
                            shout.warn(`newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ${this.steps.length - 1} (last step)`)
                        }
                    }
                }
                else if(config.modal && React.isValidElement(config.modal)){
                    this.modal = config.modal
                    console.log('Tour | using modal from tour creation')
                }
            }
        
    }
}
export default Tour