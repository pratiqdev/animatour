import shout from '../utils/shout'

class Step{
    constructor(x, state){
        /// alert user of incorrect keys
        Object.keys(x).forEach(key =>{
            switch(key){
                case 'nme':
                case 'nam':
                    case 'name': shout.warn(`addSteps | '${key}' was used... did you mean 'title' ?`) ;break;
                case 'txt':
                case 'text':
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
        // this.id                     = x.id
        this.title                  = x.title                   ? x.title           : shout.error(`Steps must at least include a title.`)
        this.element                = x.element                 || null
        this.content                = x.content                 || null

        /// use default setting if step setting does not exist
        // step settings will override default settings
        this.transitionDuration     = x.transitionDuration      || state.defaultSettings.transitionDuration
        this.stepDuration           = x.stepDuration            || state.defaultSettings.stepDuration
    }
}
export default Step