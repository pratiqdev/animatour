import shout from '../utils/shout'

class Step{
    constructor(x){
        /// alert user of incorrect keys
        Object.keys(x).forEach(key =>{
            switch(key){
                case 'nme':
                case 'nam':
                case 'name': shout.warn(`addSteps | '${key}' was used... did you mean 'title' ?`) ;break;
            }
        })

        this.id =           x.id
        this.title =        x.title
        this.element =      x.element       ? x.element         : shout.error(`Steps must include an element.`, `Use element selectors ('.el', '#el')`)
        this.content =      x.content       ? x.content         : shout.error(`Steps must include content`)
    }
}
export default Step