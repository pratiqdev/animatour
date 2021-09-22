import shout from '../utils/shout'
import createSteps from '../utils/createSteps'

let totalNumberOfBrochureVariants = 1 // (2) - 0,1

class Tour{
    // x is config
    constructor(tourId, config, state){

        if(!tourId){
            shout.error(`Must provide at least a tour name when creating a new tour: 'newTour('tour id', {...config})'`);
            return false
          }
        /// alert user of incorrect keys
        Object.keys(x).forEach(key =>{
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
        //>_______________________________________________________________________________________________________________________

        this.stepDuration       = config.stepDuration || state.globalSettings
        this.tourSettings = {
            stepDuration: config.stepDuration,
        }

        this.steps              = createSteps({steps: config.steps, state})      

        /// currentStep 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// ensure that the currentStep is within the range of 0 and number of steps

            if(config.currentStep < 0){
                shout.warn(`newTour({currentStep: ${config.currentStep}}) \n 'currentStep' was less than 0 \n defaulting to 0 (first step)`)
                this.currentStep = 0
            }
            else if(config.currentStep > this.steps.length - 1){
                shout.warn(`newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ${this.steps.length - 1} (last step)`)
                this.currentStep = this.steps.length - 1
            }
            else{
                this.currentStep = config.currentStep
            }


        /// modal 
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /// if a modal is supplied - make sure it is a valid element
        /// if no modal supplied - use default (0) built-in modal
        
            if(!config.modal){
                this.modal = <B1 />
            }else{
                if(typeof config.modal === 'number'){
                    switch(config.modal){
                        case 0: {}; break;
                        default: {
                            shout.warn(`newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ${this.steps.length - 1} (last step)`)
                        }
                    }
                }
                else if(config.modal && React.isValidElement(config.modal)){
                    
                }
            }
        
    }
}
export default Tour