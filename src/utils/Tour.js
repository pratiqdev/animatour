import shout from './shout'

class Tour{
    constructor(tourId, x){

        if(!tourId){
            shout('error', `Must provide at least a tour name when creating a new tour: 'newTour('tour id', {...config})'`);
            return false
          }
        /// alert user of incorrect keys
        Object.keys(x).forEach(key =>{
            switch(key){
                case 'nme':
                case 'nam':
                case 'name': shout('error',`addSteps | '${key}' was used... did you mean 'title' ?`) ;break;
            }
        })

        this.id =           tourId
        this.currentStep =        x.title
        this.content =      x.content       ? x.content         : shout('error', `Steps must include content`)
    }
}
export default Tour