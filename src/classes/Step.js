import shout from '../utils/shout'

class Step{
    constructor(data){
        const {step, globalSettings, tourSettings} = data
        // console.log('Step | data:',data)

        /// alert user of incorrect keys
        Object.keys(step).forEach(key =>{
            switch(key){
                case 'nme':
                case 'nam':
                    case 'name': shout.warn(`addSteps | '${key}' was used... did you mean 'title' ?`) ;break;
                case 'tstept':
                case 'testept':
                case 'cont':
                case 'conten':
                    case 'cntent': shout.warn(`addSteps | '${key}' was used... did you mean 'content' ?`) ;break;
                case 'el':
                case 'el':
                case 'elmnt':
                case 'elemnt':
                case 'lement':
                case 'elemen':
                    case 'elemet': shout.warn(`addSteps | '${key}' was used... did you mean 'element' ?`) ;break;
            }
        })

        // use unique id for tracking or filtering a step?
        // this.id                     = step.id
        this.title                  = step.title                    ? step.title           : shout.error(`Steps must at least include a title.`)
        this.element                = step.element                  ?? null
        this.content                = step.content                  ?? null

        /// use tourSetting if step.setting does not exist
        // step settings will override default settings
        this.transitionDuration     = step.transitionDuration       ?? tourSettings.transitionDuration          
        this.stepDuration           = step.stepDuration             ?? tourSettings.stepDuration                

        // labels
        this.closeLabel             = step.closeLabel               ?? tourSettings.closeLabel                 
        this.nextLabel              = step.nextLabel                ?? tourSettings.nextLabel                   
        this.prevLabel              = step.nextLabel                ?? tourSettings.prevLabel  
        
        // ring
        this.ringMargin             = step.ringMargin               ?? tourSettings.ringMargin
        this.ringColor              = step.ringColor                ?? tourSettings.ringColor
        this.ringWidth              = step.ringWidth                ?? tourSettings.ringWidth
    }
}
export default Step