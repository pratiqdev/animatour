import shout from '../utils/shout'
import createSteps from '../utils/createSteps'

let totalNumberOfBrochureVariants = 1 // (2) - 0,1

class Tour{
    constructor(tourId, x){

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
        this.brochureType       = x.brochureType            || 0
        this.steps              = createSteps(x.steps)

        //- currentStep ____________________________________________________________________________________________________________________
        if(x.currentStep < 0){
            shout.warn(`newTour({currentStep: ${x.currentStep}}) \n 'currentStep' was less than 0 \n defaulting to 0 (first step)`)
            this.currentStep = 0
        }
        if(x.currentStep > this.steps.length - 1){
            shout.warn(`newTour() - currentStep \n currentStep was greater than the number of steps \n defaulting to ${this.steps.length - 1} (last step)`)
            this.currentStep = this.steps.length - 1
        }
        
    }
}
export default Tour